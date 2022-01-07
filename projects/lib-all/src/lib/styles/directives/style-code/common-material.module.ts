import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Material
import { MatCheckboxModule} from '@angular/material/checkbox';
import {    MatRadioModule} from '@angular/material/radio';
import {   MatSelectModule} from '@angular/material/select';
import {    MatSliderModule} from '@angular/material/slider';
import {    MatSlideToggleModule} from '@angular/material/slide-toggle';
import {    MatListModule} from '@angular/material/list';
import {    MatTabsModule} from '@angular/material/tabs';
import {    MatChipsModule} from '@angular/material/chips';
import {    MatProgressBarModule} from '@angular/material/progress-bar';
import {    MatSnackBarModule} from '@angular/material/snack-bar';
import {    MatInputModule} from '@angular/material/input';

@NgModule({
  exports: [
        CommonModule,
        MatCheckboxModule,
        MatRadioModule,
        MatSelectModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatListModule,
        MatTabsModule,
        MatChipsModule,
        MatProgressBarModule,
        MatSnackBarModule,
        MatInputModule,
       // MatButtonModule
  ]
})
export class CommonMaterialModule { }
