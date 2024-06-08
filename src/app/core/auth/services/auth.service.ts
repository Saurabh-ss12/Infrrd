import { Injectable } from "@angular/core";
import { Auth } from "../models/auth.model";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private _isLoggedIn = false;
  constructor() {}

  login(auth: Auth) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (auth.password === "x") {
          this._isLoggedIn = true;
          resolve(true);
        } else {
          reject("Incorrect Password");
        }
      }, 1500);
    });
  }

  get isLoggedIn() {
    return this._isLoggedIn;
  }

  set isLoggedIn(isLogin: boolean) {
    this._isLoggedIn = isLogin;
  }
}
