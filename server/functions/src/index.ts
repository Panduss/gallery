import Page from './models/page';
import {getAllPages} from './providers/pages';

interface WebApiInterface {
    getAllPages: () => Promise<Array<Page>>;
}

export const WebApi: WebApiInterface = {
    getAllPages: getAllPages
}
