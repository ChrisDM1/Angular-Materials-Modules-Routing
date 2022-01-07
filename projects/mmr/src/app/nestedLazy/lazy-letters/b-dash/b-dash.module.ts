import { biii } from './biii.component';
import { bii } from './bii.component';
import { bDash } from './b-dash.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BDashRoutingModule } from './b-dash-routing.module';
import { cExportedFromThisModule } from '../c-exported-from-this.module';
//import { DeclaredExportedInLzyltrsModuleComponent } from '../declared-exported-in-lzyltrs-module.component';




@NgModule({
  declarations: [bDash,bii,biii],
  imports: [
    cExportedFromThisModule,
    BDashRoutingModule,
    CommonModule

   
  //  DeclaredExportedInLzyltrsModuleComponent

  ],
  exports:[bii]
})
export class bDashModule { }
 