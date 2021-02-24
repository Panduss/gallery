import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../services/auth.service";
import {User} from "../../../../models/user.model";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"]
})
export class SettingsComponent implements OnInit {

  public loginForm: FormGroup;

  public constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
  }

  public ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  public onFormSubmit(): void {
    console.log("this.loginForm.value", this.loginForm.value);
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.get("email").value, this.loginForm.get("password").value).subscribe(
        (user: User) => {
          console.log("LOGIN RES", user);
        }
      );
    }
  }
}
