import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Tab} from "../../../../models/tab.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Image} from "../../../../models/image.model";

@Component({
  selector: "app-home",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss"]
})
export class ArticleComponent implements OnInit {

  public state$: Observable<Tab>;
  public galleryForm: FormGroup;
  public image: Image;
  public isLoading = false;

  public constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.state$ = this.activatedRoute.paramMap.pipe(map(() => {
      console.log("window.history.state", window.history.state.data);
      return window.history.state.data;
    }));
  }

  public ngOnInit(): void {
    this.galleryForm = this.formBuilder.group({
      imageFile: [null, Validators.required],
      imageTitle: [null, Validators.required],
      imageDesc: [null, Validators.required]
    });
  }

  public onFormSubmit(): void {
    this.isLoading = true;

    console.log("this.galleryForm.value", this.galleryForm.get("imageFile").value._files[0]);
    // POST REQUEST LATER
    // this.api.addGallery(this.galleryForm.value, this.galleryForm.get('imageFile').value._files[0])
    //   .subscribe((res: any) => {
    //     this.isLoadingResults = false;
    //     if (res.body) {
    //       this.router.navigate(['/gallery-details', res.body._id]);
    //     }
    //   }, (err: any) => {
    //     console.log(err);
    //     this.isLoadingResults = false;
    //   });
  }
}
