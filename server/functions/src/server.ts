import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as bodyParser from "body-parser";
import * as fireorm from 'fireorm';

admin.initializeApp(functions.config().firebase);
fireorm.initialize(admin.firestore());

const app = express();
const main = express();

main.use('/api/v1', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

//define google cloud function name
export const webApi = functions.https.onRequest(main);
