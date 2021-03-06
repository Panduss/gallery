import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import { MaterialModule } from "src/app/material.module";
import {ImageResolver} from "src/app/resolvers/image.resolver";
import {HomeComponent} from "./home.component";
import {TabResolver} from "../../../../resolvers/tab.resolver";
import {FlexLayoutModule} from "@angular/flex-layout";

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
      loadChildren: () => import("../article/article.module").then(m => m.ArticleModule),
      runGuardsAndResolvers: "paramsOrQueryParamsChange",
      resolve: {
        images: ImageResolver
      }
    }
  ]
};

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([HOME_ROUTE]),
    FlexLayoutModule
  ],
  providers: [
    ImageResolver,
    TabResolver
  ],
  declarations: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeRoutingModule {}


