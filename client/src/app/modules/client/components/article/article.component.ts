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
  public imageSrc: string;
  private pageId: string;

  public constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.state$ = this.activatedRoute.paramMap.pipe(map(() => {
      if (window.history.state.data) { this.pageId = window.history.state.data.id; }
      return window.history.state.data;
    }));
  }

  public ngOnInit(): void {
    this.galleryForm = this.formBuilder.group({
      file: [null, Validators.required],
      title: [null, Validators.required],
      description: [null, Validators.required]
    });
  }

  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        console.log("reader.result", reader.result);
        this.imageSrc = reader.result as string;
        this.galleryForm.patchValue({
          file: reader.result
        });
      };
    }
  }

  public onFormSubmit(): void {
    console.log(this.galleryForm.value);
    this.image = this.galleryForm.value;

    if (!this.image.file && !this.image.title) {
      return;
    }

    const data = new Image(this.pageId, this.image.file, this.image.title, this.image.description);
    console.log(data);
    // POST here
    // this.http.post('http://localhost:8001/upload.php', this.myForm.value)
    //   .subscribe(res => {
    //     console.log(res);
    //     alert('Uploaded Successfully.');
    //   })
  }
}
