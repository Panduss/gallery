import {Page} from "./models/page";
import {getAllPages} from "./providers/pages";

interface PagesApiInterface {
    getAllPages: () => Promise<Array<Page>>;
};

export const PagesApi: PagesApiInterface = {
    getAllPages: getAllPages
};
