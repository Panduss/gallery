import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {MenuComponent} from "./menu.component";
import {MatTabsModule} from "@angular/material";

const routes: Routes = [
  {
    path: "",
    component: MenuComponent,
    children: [
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      },
      {
        path: "home",
        loadChildren: "../../../modules/client/pages/home/home.module#HomeModule"
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    MatTabsModule
  ],
  declarations: [
    MenuComponent
  ]
})
export class MenuModule {
}
