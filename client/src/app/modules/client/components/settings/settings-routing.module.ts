import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SettingsComponent} from "./settings.component";
import {CommonModule} from "@angular/common";
import {MaterialModule} from "../../../../material.module";

const routes: Routes = [
  {path: "", component: SettingsComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MaterialModule
  ],
  declarations: [
    SettingsComponent
  ]
})
export class SettingsRoutingModule {}
