import {Page} from '../models/page';
import {getRepository} from 'fireorm';

export async function getAllPages(): Promise<Array<Page>> {
    const pagesRepository = getRepository(Page);
    return pagesRepository.find();
}
