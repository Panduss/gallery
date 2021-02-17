import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {HomeModule} from "./modules/client/components/home/home.module";
import {TabService} from "./services/tab.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [
    TabService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
