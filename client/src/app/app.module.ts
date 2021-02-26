import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {TabService} from "./services/tab.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TabResolver} from "./resolvers/tab.resolver";
import {HomeModule} from "./modules/client/components/home/home.module";
import {MaterialModule} from "./material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {StorageProvider} from "./providers/storage.provider";
import {HeaderInterceptor} from "./interceptors/header.interceptor";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    MaterialModule
  ],
  providers: [
    TabService,
    TabResolver,
    StorageProvider,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
