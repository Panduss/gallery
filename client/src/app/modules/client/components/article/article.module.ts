import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ArticleRoutingModule} from "./article-routing.module";
import {MaterialModule} from "../../../../material.module";

@NgModule({
  imports: [
    CommonModule,
    ArticleRoutingModule,
    MaterialModule
  ]
})
export class ArticleModule {
}
