import {Component} from "@angular/core";
import {Tab} from "../../../../models/tab.model";
import {Router} from "@angular/router";
import {TabService} from "../../../../services/tab.service";
import {TabType} from "../../../../models/tabType.model";

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
    this.tabService.tabs$.subscribe(async (tabs: Array<Tab>) => {
      if (tabs) {
        this.tabs = tabs.filter(tab => tab.type === TabType.image);
        await this.router.navigate([`article/${this.tabs[0].id}`]);
      }
    });
  }
}
