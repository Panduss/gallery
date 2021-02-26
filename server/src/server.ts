import express from "express";
import {NextFunction, Request, Response} from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import admin from "firebase-admin";
import firebase from "firebase";
import * as fireorm from "fireorm";
import cors from "cors";
import routes from "./routes";

import {firebaseCred} from "./firebaseCred";

export const fbAdmin = admin.initializeApp({
    credential: admin.credential.cert(firebaseCred.SERVICE_ACCOUNT as admin.ServiceAccount),
    storageBucket: firebaseCred.STORAGE_BUCKET
});

export const fb = firebase.initializeApp(firebaseCred.FIREBASE_CONFIG);
fireorm.initialize(admin.firestore());

// export const fbAdmin = admin.initializeApp({
//     credential: admin.credential.cert(JSON.parse(Buffer.from(process.env.SERVICE_ACCOUNT, "base64").toString("ascii")) as admin.ServiceAccount),
//     storageBucket: process.env.STORAGE_BUCKET
// });

// export const fb = firebase.initializeApp(JSON.parse(Buffer.from(process.env.FIREBASE_CONFIG, "base64").toString("ascii")));
// fireorm.initialize(admin.firestore());

const app = express();
const PORT = process.env.PORT || 5000

const whitelist = [
    "http://localhost:4200"
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
app.use(bodyParser.json({limit: '10mb'}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))
app.use('/', routes);
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    res.status(error.status || 500).send({
        error: {
            status: error.status || 500,
            message: error.message || 'Internal Server Error'
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
