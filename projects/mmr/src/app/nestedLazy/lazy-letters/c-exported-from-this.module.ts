import { cExported } from './c-exported.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: 
     [cExported],
  imports: [
    CommonModule
  ],
  exports:[cExported]
})
export class cExportedFromThisModule { }
