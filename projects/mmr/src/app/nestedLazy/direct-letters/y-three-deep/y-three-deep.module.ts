import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YDashComponent } from './y-dash.component';
import { zi } from './zi.component';



@NgModule({
  declarations: [
    YDashComponent, 
    zi],
  imports: [
    RouterModule,
    CommonModule,
   
  ]
})
export class YThreeDeepModule { }
