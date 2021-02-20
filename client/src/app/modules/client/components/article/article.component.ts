import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Tab} from "../../../../models/tab.model";

@Component({
  selector: "app-home",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss"]
})
export class ArticleComponent {

  public state$: Observable<Tab>;
  public base64Files: string[] = [];
  private files: any[] = [];
  private fileReader = new FileReader();

  public constructor(
    private activatedRoute: ActivatedRoute,
  ) {
    this.state$ = this.activatedRoute.paramMap.pipe(map(() => {
      console.log("window.history.state", window.history.state.data);
      return window.history.state.data;
    }));
  }

  public onChange(event: Event) {
    const files = event.target["files"];
    if (event.target["files"]) {
      console.log(event.target["files"]);
      this.readFiles(event.target["files"], 0);
    }
  }

  private readFiles(files: any[], index: number) {
    const file = files[index];
    this.fileReader.onload = () => {
      if (typeof this.fileReader.result === "string") {
        this.base64Files.push(this.fileReader.result);
      }
      if (files[index + 1]) {
        this.readFiles(files, index + 1);
      } else {
        console.log("loaded all files");
      }
    };

    console.log('this.base64Files', this.base64Files);
    this.fileReader.readAsDataURL(file);
  }

}
