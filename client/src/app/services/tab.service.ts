import {Injectable} from "@angular/core";
import {Tab} from "../models/tab.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TabService {

  // public tabs: Array<TabService> = [];

  public constructor(
    private http: HttpClient
  ) {
    // this.getPages();
  }

  public getPages(): Observable<Array<TabService>> {
    return this.http.get<Array<TabService>>(environment.api + "pages/");
      // .pipe(
      //   skipWhile(u => {
      //     console.log("u", u);
      //     return !u;
      //   }),
      //   take(1),
      //   map((tabs) => this.tabs = tabs));
  }
}
