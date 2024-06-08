import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../../core/auth/services/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  isLogout = false;

  constructor(private router: Router, private authService: AuthService) {}

  onLogout() {
    this.isLogout = true;
  }

  cancel() {
    this.isLogout = false;
  }

  logout() {
    this.isLogout = false;
    this.authService.isLoggedIn = false;
    this.router.navigate(["/login"]);
  }
}
