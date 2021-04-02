import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectFourComponent } from './connect-four.component';



@NgModule({
  declarations: [ConnectFourComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ConnectFourComponent
  ]
})
export class ConnectFourModule { }
