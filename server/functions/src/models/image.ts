import {Collection} from 'fireorm';
import {IsString} from 'class-validator';

@Collection('images')
export class Image {

    @IsString()
    public id: string;

    @IsString()
    public url: string

}
