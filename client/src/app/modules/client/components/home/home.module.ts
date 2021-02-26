import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HomeRoutingModule, HOME_ROUTE} from "./home-routing.module";

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule {
}
