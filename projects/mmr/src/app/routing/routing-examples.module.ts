import { LoginGuardService } from './guards/login.service';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'projects/lib-all/src/lib/styles/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigateComponent } from './navigate/navigate.component';
import { OutletComponent } from './outlet.component';
import { FragmentsScrollComponent } from './fragments-scroll/fragments-scroll.component';
import { StyleCodeModule } from 'projects/lib-all/src/lib/styles/directives/style-code/style-code.module';
import { NgxScrollComponent } from './ngx-scroll/ngx-scroll.component';
import { ActivatedComponent } from './activated/activated.component';
import { GuardsComponent } from './guards/guards.component';


@NgModule({
  declarations: [
    NavigateComponent,
    FragmentsScrollComponent,
    OutletComponent,
    NgxScrollComponent,
    ActivatedComponent,
  GuardsComponent],
  imports: [
    MaterialModule,
    CommonModule,
    StyleCodeModule,
    RouterModule
  ],
  exports:[
    NavigateComponent,
    FragmentsScrollComponent,
    OutletComponent,
    GuardsComponent
  ],
  providers:[LoginGuardService]

})
export class RoutingExamplesModule { }
