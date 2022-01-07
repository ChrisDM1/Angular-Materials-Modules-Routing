import { xi } from './xi.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectLetters } from './direct-letters.component';

import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ DirectLetters,xi],
  imports: [
    RouterModule,
    CommonModule,
 
  ]
})
export class DirectLettersModule { }
