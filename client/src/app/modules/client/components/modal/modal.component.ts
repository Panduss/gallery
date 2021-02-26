import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {Image} from "../../../../models/image.model";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: [ "./modal.component.scss" ]
})
export class ModalComponent {

  public constructor(
    private dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Image
  ) {
    console.log("hello", data);
  }

  public onCloseDialog(): void {
    this.dialogRef.close();
  }
}
