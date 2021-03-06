import {Collection} from "fireorm";
import {IsString} from "class-validator";

@Collection("images")
export default class Image {

    @IsString()
    public id: string;

    @IsString()
    public pageId: string;

    @IsString()
    public url: string;

    @IsString()
    public title: string;

    @IsString()
    public description?: string;

    @IsString()
    public file?: string;
}
