import {Component} from "@angular/core";
import {TabService} from "../../../../services/tab.service";
import {Tab} from "../../../../models/tab.model";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent {

  public tabs: Array<Tab> = [];

  public constructor(
    private tabService: TabService
  ) {
    this.tabService.getPages()
      .subscribe((tabs: Array<Tab>) => {
        console.log("TABS => ", tabs);
        this.tabs = tabs;
      });
  }
}
