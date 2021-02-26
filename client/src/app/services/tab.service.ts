import {Injectable} from "@angular/core";
import {Tab} from "../models/tab.model";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class TabService {

  public tabs: BehaviorSubject<Array<Tab>> = new BehaviorSubject(null);
  public tabs$: Observable<Array<Tab>> = this.tabs.asObservable();

  public constructor(
    private http: HttpClient
  ) {
    this.getPages().subscribe(
      (tabs) => {
        this.tabs.next(tabs);
      }
    );
  }

  public getPages(): Observable<Array<Tab>> {
    return this.http.get<Array<Tab>>(`${environment.api}/pages`);
  }
  //
  // public openTab(url: string): void {
  //   const tab = this.getTabOptionByUrl(url);
  //   this.tabs(tab);
  // }
  //
  // public getTabOptionByUrl(url: string): Tab {
  //   return this.tabOptions.find(tab =&gt; tab.url === url);
  // }
  //
  // public deleteTab(index: number) {
  //   this.tabs.splice(index, 1);
  // }
}
