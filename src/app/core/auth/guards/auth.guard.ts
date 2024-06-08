import { inject } from "@angular/core";
import { CanMatchFn, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

export const authGuard: CanMatchFn = (route, state) => {
  if (inject(AuthService).isLoggedIn) {
    return true;
  } else {
    inject(Router).navigate(["/login"]);
    return false;
  }
};
