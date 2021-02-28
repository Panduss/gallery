import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ArticleComponent} from "./article.component";
import {CommonModule} from "@angular/common";
import {MaterialModule} from "../../../../material.module";
import {FlexModule} from "@angular/flex-layout";

const routes: Routes = [
  {path: "", component: ArticleComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MaterialModule,
    FlexModule
  ],
  declarations: [
    ArticleComponent
  ]
})
export class ArticleRoutingModule {}
