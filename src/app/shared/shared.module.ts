import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { PopUpComponent } from "./components/pop-up/pop-up.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [HeaderComponent, PopUpComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, PopUpComponent],
})
export class SharedModule {}
