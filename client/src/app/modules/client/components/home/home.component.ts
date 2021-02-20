import {Component} from "@angular/core";
import {Tab} from "../../../../models/tab.model";
import {Router} from "@angular/router";
import {TabService} from "../../../../services/tab.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent {

  public tabs: Array<Tab> = [];

  public constructor(
    private router: Router,
    private tabService: TabService
  ) {
    this.tabService.tabs$.subscribe((tabs: Array<Tab>) => {
      this.tabs = tabs;
    });
  }
}
