import express from "express";
import {NextFunction, Request, Response} from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import admin from "firebase-admin";
import firebase from "firebase";
import * as fireorm from "fireorm";
import cors from "cors";
import {PagesApi, AuthApi} from "./index";
import {Page} from "./models/page";
import {authorize} from "./middlewares/authorize";
import {AuthUser} from "./models/auth";

export const fbAdmin = admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(Buffer.from(process.env.SERVICE_ACCOUNT, "base64").toString("ascii")) as admin.ServiceAccount),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
});

export const fb = firebase.initializeApp(JSON.parse(Buffer.from(process.env.FIREBASE_CONFIG, "base64").toString("ascii")));
fireorm.initialize(admin.firestore());

const app = express();
const PORT = process.env.PORT || 5000

const whitelist = [
    "http://localhost:4000"
];

const corsOptions = {
    origin(origin: any, callback: any) {
        if (!origin || whitelist.filter((url) => origin.includes(url)).length) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true
};

app.use(morgan(morgan.compile("[:date[web]] :method :url :status (millis :response-time) :remote-addr :referrer")));
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post("/login", (req: Request, res: Response, next: NextFunction) => {
    AuthApi.login(req.body.email, req.body.password)
        .then((result: AuthUser) => res.status(200).send(result))
        .catch(next);
})

app.get("/pages", (req: Request, res: Response, next: NextFunction) => {
    PagesApi.getAllPages()
        .then((result: Array<Page>) => res.status(200).send(result))
        .catch(next);
});

app.put("/pages", authorize, (req: Request, res: Response, next:NextFunction) => {
    PagesApi.addPage(req.body.type, req.body.title, req.body.subtitle, req.body.images)
        .then((result: Page) => res.status(200).send(result))
        .catch(next);
})

app.post("/pages/:id", authorize, (req: Request, res: Response, next:NextFunction) => {
    PagesApi.editPage(req.body.id, req.body.type, req.body.title, req.body.subtitle, req.body.images)
        .then((result: Page) => res.status(200).send(result))
        .catch(next);
})

app.post("/pages/:id", authorize, (req: Request, res: Response, next:NextFunction) => {
    PagesApi.deletePage(req.body.id)
        .then((result: boolean) => res.status(200).send(result))
        .catch(next);
})

app.use((error: any, req: Request, res: Response) => {
    console.log("Error => ", error);
    return res.send(error);
});

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
