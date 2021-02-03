import {Collection} from "fireorm";
import {IsEnum, IsString, ValidateNested} from "class-validator";
import {TabType} from "./tabType";
import Image from "./image";

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
