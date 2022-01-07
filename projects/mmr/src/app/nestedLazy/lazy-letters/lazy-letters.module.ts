import { cExportedFromThisModule } from './c-exported-from-this.module';
import { bDashModule } from './b-dash/b-dash.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLettersRoutingModule } from './lazy-letters-routing.module';

import { LazyLettersDash } from './lazy-letters-dash.component';



@NgModule({
  declarations: [    
    LazyLettersDash
    ],
  imports: [
  LazyLettersRoutingModule,
    CommonModule,
    bDashModule
  ],
  exports:[
  ]
})
export class LazyLettersModule { }
