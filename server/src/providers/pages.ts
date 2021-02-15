import {Page} from "../models/page";
import {getRepository} from "fireorm";
import Image from "../models/image";
import {TabType} from "../models/tabType";

export async function getAllPages(): Promise<Array<Page>> {
    const pagesRepository = getRepository(Page);
    return pagesRepository.find();
}

export async function addPage(type: TabType, title: string, subtitle?: string, images?: Array<Image>): Promise<Page> {
    if (!type) {
        throw new Error("Page type must be provided!");
    }
    if (!title) {
        throw new Error("Page title must be provided!");
    }

    const pagesRepository = getRepository(Page);

    const page = new Page();
    page.type = type;
    page.title = title;
    if (subtitle) {
        page.subtitle = subtitle;
    }
    if (images) {
        page.images = images;
    }

    return await pagesRepository.create(page);
}

export async function editPage(id: string, type: TabType, title: string, subtitle?: string, images?: Array<Image>): Promise<Page> {
    if (!id) {
        throw new Error("Page id must be provided!");
    }

    const pagesRepository = getRepository(Page);
    let page = await pagesRepository.whereEqualTo('id', id).findOne();

    if (page !== null) {
        page.type = type;
        page.title = title;
        if (subtitle) {
            page.subtitle = subtitle;
        }
        if (images) {
            page.images = images;
        }

        return await pagesRepository.update(page);

    } else {
        throw new Error("Page does not exist!");
    }
}

export async function deletePage(id: string): Promise<boolean> {
    if (!id) {
        throw new Error("Page id must be provided!");
    }

    const pagesRepository = getRepository(Page);
    let page = await pagesRepository.whereEqualTo('id', id).findOne();

    if (page !== null) {
        await pagesRepository.delete(id);
        return true;

    } else {
        throw new Error("Page does not exist!");
    }
}
