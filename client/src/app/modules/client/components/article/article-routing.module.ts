import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ArticleComponent} from "./article.component";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material";

const routes: Routes = [
  {path: "", component: ArticleComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatButtonModule
  ],
  declarations: [
    ArticleComponent
  ]
})
export class ArticleRoutingModule {}
