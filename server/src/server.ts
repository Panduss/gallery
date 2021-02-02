import express from "express";
import {NextFunction, Request, Response} from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import admin from "firebase-admin";
import firebase from "firebase";
import * as fireorm from "fireorm";
import cors from "cors";
import {PagesApi} from "./index";
import {Page} from "./models/page";
import credentials from "./firebaseCred";

export const firebaseAdmin = admin.initializeApp({
    credential: admin.credential.cert(process.env.ENV === 'dev' ? credentials.SERVICE_ACCOUNT : JSON.parse(Buffer.from(process.env.SERVICE_ACCOUNT, "base64").toString("ascii"))),
    storageBucket: process.env.ENV === 'dev' ? credentials.STORAGE_BUCKET : process.env.STORAGE_BUCKET
});

firebase.initializeApp(process.env.ENV === 'dev' ? credentials.FIREBASE_CONFIG : JSON.parse(Buffer.from(process.env.FIREBASE_CONFIG, "base64").toString("ascii")));
fireorm.initialize(admin.firestore());

const app = express();
const port = "8080";

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

app.get("/pages", (req: Request, res: Response, next: NextFunction) => {
    PagesApi.getAllPages()
        .then((result: Array<Page>) => res.status(200).send(result))
        .catch(next);
});

app.use((error: any, req: Request, res: Response) => {
    console.log("Error => ", error);
    return res.json(error).send();
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
