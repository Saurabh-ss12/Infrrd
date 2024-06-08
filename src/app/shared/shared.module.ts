import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PopUpComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
