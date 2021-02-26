import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Image} from "../../../../models/image.model";
import {ImageService} from "../../../../services/image.service";
import {AuthService} from "../../../../services/auth.service";
import {ModalComponent} from "../modal/modal.component";
import {MatDialog} from "@angular/material";

@Component({
  selector: "app-home",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss"]
})
export class ArticleComponent implements OnInit {

  public galleryForm: FormGroup;
  public image: Image;
  public images: Array<Image> = [];
  public imageSrc: string;
  private pageId: string;
  public authUser$ = this.authService.user$;
  public loading = false;

  public constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private imageService: ImageService,
    private authService: AuthService,
    private dialog: MatDialog
  ) {
    this.activatedRoute.data.subscribe(data => {
      this.images = data.images;
    });
  }

  public ngOnInit(): void {
    this.galleryForm = this.formBuilder.group({
      file: [null, Validators.required],
      title: [null, Validators.required],
      description: [null, Validators.required]
    });
  }

  public openModal(image: Image): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: image,
      hasBackdrop: true,
      width: "80%",
      height: "80%",
      panelClass: "modal"
    });

    dialogRef.afterClosed().subscribe();
  }

  async onFileChange(event) {
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      // const img = document.createElement("img");
      // img.src = await new Promise<any>(resolve => {

      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageSrc = reader.result as string;
        // resolve(e.target.result);
      };
      reader.readAsDataURL(file);
      // });
      // await new Promise(resolve => img.onload = resolve);
      // const canvas = document.createElement("canvas");
      // let ctx = canvas.getContext("2d");
      // ctx.drawImage(img, 0, 0);
      // const MAX_WIDTH = 400;
      // const MAX_HEIGHT = 400;
      // let width = img.naturalWidth;
      // let height = img.naturalHeight;
      // if (width > height) {
      //   if (width > MAX_WIDTH) {
      //     height *= MAX_WIDTH / width;
      //     width = MAX_WIDTH;
      //   }
      // } else {
      //   if (height > MAX_HEIGHT) {
      //     width *= MAX_HEIGHT / height;
      //     height = MAX_HEIGHT;
      //   }
      // }
      // canvas.width = width;
      // canvas.height = height;
      // ctx = canvas.getContext("2d");
      // ctx.drawImage(img, 0, 0, width, height);
      // const result = await new Promise<Blob>(resolve => { canvas.toBlob(resolve, "image/jpeg", 0.95); });
      //
      // console.log("RESULT", result);
      // this.galleryForm.patchValue({
      //   file: result
      // });
      // return result;
    }
  }

  public onFormSubmit(): void {
    console.log(this.galleryForm.value);
    this.image = this.galleryForm.value;
    console.log(this.image);
    if (!this.image.file || !this.image.title) {
      return;
    }

    const data = new Image(this.pageId, this.image.file, this.image.title, this.image.description);
    console.log(data);

    this.imageService.addImage(this.pageId, data).subscribe((stuff) => {
      console.log("hello", stuff);
    });
    // POST here
    // this.http.post('http://localhost:8001/upload.php', this.myForm.value)
    //   .subscribe(res => {
    //     console.log(res);
    //     alert('Uploaded Successfully.');
    //   })
  }
}
