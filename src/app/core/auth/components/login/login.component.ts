import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Auth } from "../../models/auth.model";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent {
  errorMessage = "";
  isValidating = false;
  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(f: NgForm) {
    if (!f.valid) return;

    this.isValidating = true;
    const loginData: Auth = {
      username: f.value.username,
      password: f.value.password,
    };
    this.authService
      .login(loginData)
      .then((res) => {
        this.isValidating = false;
        if (res) this.router.navigate(["/book/home"]);
      })
      .catch((err) => {
        this.isValidating = false;
        if (err) this.errorMessage = "Please enter correct Password";
      });
  }
}
