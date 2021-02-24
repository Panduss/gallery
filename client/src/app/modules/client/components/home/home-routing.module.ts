import {Route} from "@angular/router";
import {HomeComponent} from "./home.component";

export const HOME_ROUTE: Route = {
  path: "",
  component: HomeComponent,
  children: [
    {
      path: "settings",
      loadChildren: () => import("../settings/settings.module").then(m => m.SettingsModule)
    },
    {
      path: "article/:id",
      loadChildren: () => import("../article/article.module").then(m => m.ArticleModule)
    }
  ]
};


