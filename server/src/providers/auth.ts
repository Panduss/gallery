import {fb} from "../server";
import {User} from "../models/user";
import {getRepository} from "fireorm";
import {AuthUser} from "../models/auth";

export async function login(email: string, password: string): Promise<AuthUser> {
    if (!email) {
        throw new Error('Email is required!');
    }
    if (!password) {
        throw new Error('Password is required!');
    }

    email = email.toLowerCase();

    let credentials = await fb.auth().signInWithEmailAndPassword(email, password);

    if (!credentials.user) {
        throw new Error('Failed to log in user!');
    }

    const userId = credentials.user.uid;
    const token = await credentials.user.getIdToken();

    if (userId && token) {
        const usersRepository = getRepository(User);
        const authUser = new AuthUser()
        authUser.user = await usersRepository.findById(userId);
        authUser.token = token;
        return authUser;
    } else {
        throw new Error('Email is not verified!');
    }
}
