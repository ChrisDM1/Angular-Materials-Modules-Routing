import { MatButtonModule } from '@angular/material/button';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonToggleModule}from '@angular/material/button-toggle';


@NgModule({
  declarations: [],
  imports: [
  ],
  exports:[
    MatButtonModule,
    MatButtonToggleModule
  ]
})
export class MyButtonsModule { }

 