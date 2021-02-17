import {Component, OnDestroy, OnInit} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit, OnDestroy {

  public selectedPath?: string;
  public pages = [];
  private routeSubscription: Subscription = new Subscription();

  public constructor(
    private router: Router
  ) {
  }

  public ngOnInit(): void {
    this.routeSubscription = this.router.events.subscribe(
      (event) => {
        if (event instanceof NavigationEnd) {
          this.selectedPath = event.urlAfterRedirects;
        }
      }
    );
  }

  public ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
