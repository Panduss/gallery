import {Collection} from "fireorm";
import {IsEnum, IsString, ValidateNested} from "class-validator";
import {Image} from "../../../client/src/app/shared/models/image";
import {TabType} from "./tabType";

@Collection("pages")
export class Page {

    @IsString()
    public id: string;

    @IsEnum(TabType)
    public type: TabType;

    @IsString()
    public title: string;

    @IsString()
    public subtitle?: string;

    @ValidateNested({each: true})
    public images?: Array<Image>;

}
