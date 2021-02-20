import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";
import {HOME_ROUTE} from "./home-routing.module";
import {MaterialModule} from "../../../../material.module";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([HOME_ROUTE])
  ],
  declarations: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {
}
