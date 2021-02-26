import {Collection} from "fireorm";
import {IsEnum, IsString} from "class-validator";
import {TabType} from "./tabType";

@Collection("pages")
export class Page {

    @IsString()
    public id: string;

    @IsEnum(TabType, )
    public type: TabType;

    @IsString()
    public title: string;

    @IsString()
    public subtitle?: string;

}
