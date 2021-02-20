import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Tab} from "../models/tab.model";
import {TabService} from "../services/tab.service";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class TabResolver implements Resolve<Array<Tab>> {

  public constructor(
    private readonly tabService: TabService
  ) {
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<Tab>> {
    return this.tabService.getPages();
  }
}
