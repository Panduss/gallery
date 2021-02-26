import {getRepository} from "fireorm";
import Image from "../models/image";
import {fbAdmin} from "../server";

const uuid = require("uuid-v4");
const bucket = fbAdmin.storage().bucket();

export async function getImagesForPage(pageId: string): Promise<Array<Image>> {
    const imagesRepository = getRepository(Image);
    return imagesRepository.whereEqualTo(image => image.pageId, pageId).find();
}

export async function addImagesToPage(image: Image, pageId: string): Promise<Image> {
    if (!image) {
        throw new Error("No image to upload!");
    }
    if (!pageId) {
        throw new Error("No page id provided!");
    }

    const imagesRepository = getRepository(Image);
    const uploadedImage = await uploadImage(image);
    console.log('UPLOADED IMAGE', uploadedImage);
    // const images = Promise.all(pictures.map((picture) => {
    const pic = new Image();
    pic.pageId = pageId;
    pic.title = image.title;
    if (image.description) {
        pic.description = image.description;
    }

    const createdImage = imagesRepository.create(pic);
    console.log("createdImage", createdImage);
    return createdImage;
    // }))

    // return await images;
}

async function uploadImage(picture: Image): Promise<any> {

    const metadata = {
        metadata: {
            // This line is very important. It's to create a download token.
            firebaseStorageDownloadTokens: uuid()
        },
        contentType: "image/png",
        cacheControl: "public, max-age=31536000",
    };

    console.log(`${picture.title} is uploading...`);

    // Uploads a local file to the bucket
    return await bucket.upload(picture.title, {
        // Support for HTTP requests made with `Accept-Encoding: gzip`
        gzip: true,
        metadata: metadata,
    });
}
