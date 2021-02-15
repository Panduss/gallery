import {Page} from "./models/page";
import {addPage, deletePage, editPage, getAllPages} from "./providers/pages";
import {TabType} from "./models/tabType";
import Image from "./models/image";
import {login} from "./providers/auth";
import {AuthUser} from "./models/auth";

interface PagesApiInterface {
    getAllPages: () => Promise<Array<Page>>;
    addPage: (type: TabType, title: string, subtitle?: string, images?: Array<Image>) => Promise<Page>;
    editPage: (id: string, type: TabType, title: string, subtitle?: string, images?: Array<Image>) => Promise<Page>;
    deletePage: (id: string) => Promise<boolean>;
}

interface AuthApiInterface {
    login: (email: string, password: string) => Promise<AuthUser>;
}

export const PagesApi: PagesApiInterface = {
    getAllPages: getAllPages,
    addPage: addPage,
    editPage: editPage,
    deletePage: deletePage
};

export const AuthApi: AuthApiInterface = {
    login: login
};
