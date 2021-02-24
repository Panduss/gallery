import {NgModule} from "@angular/core";
import {MatTabsModule} from "@angular/material/tabs";
import {MatToolbarModule} from "@angular/material/toolbar";
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule
} from "@angular/material";
import {MaterialFileInputModule} from "ngx-material-file-input";
import {ImageUploadModule} from "ng2-imageupload";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MaterialFileInputModule,
    MatButtonModule,
    ImageUploadModule,
    ReactiveFormsModule
  ],
  exports: [
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MaterialFileInputModule,
    MatButtonModule,
    ImageUploadModule,
    ReactiveFormsModule
  ]
})
export class MaterialModule {
}
