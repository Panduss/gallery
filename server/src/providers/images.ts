import {getRepository} from "fireorm";
import Image from "../models/image";

export async function getImagesForPage(pageId: string): Promise<Array<Image>> {
    const imagesRepository = getRepository(Image);
    return imagesRepository.whereEqualTo(image => image.pageId, pageId).find();
}

export async function addImagesToPage(pictures: Array<Image>, pageId: string): Promise<Array<Image>> {
    if (!pictures.length) {
        throw new Error("No image to upload!");
    }
    if (!pageId) {
        throw new Error("No page id provided!");
    }

    const imagesRepository = getRepository(Image);

    const images = Promise.all(pictures.map((picture) => {
        const image = new Image();
        image.pageId = pageId;
        image.url = picture.url;
        if (picture.description) {
            image.description = picture.description;
        }

        return imagesRepository.create(image);
    }))

    return await images;
}
