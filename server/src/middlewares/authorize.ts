import { Request, Response, NextFunction } from 'express';
import {firebaseAdmin} from "../server";

export async function authorize(req: Request, res: Response, next: NextFunction) {
    let token = req.headers.authorization;

    if (!token) {
        return res.status(401).send({ message: 'Missing token' });
    }
    try {
        let decodedToken = await firebaseAdmin.auth().verifyIdToken(token, true);
        req.body ? req.body.claims = decodedToken : req.body = { claims: decodedToken };
        next();
    } catch(e) {
        return res.status(403).send({ message: 'Token invalid' });
    }
}
