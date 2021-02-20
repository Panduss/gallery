import {Route} from "@angular/router";
import {HomeComponent} from "./home.component";

export const HOME_ROUTE: Route = {
  path: "",
  component: HomeComponent,
  children: [
    {
      path: "article/:id",
      loadChildren: () => import("../article/article.module").then(m => m.ArticleModule)
    }
  ]
};


