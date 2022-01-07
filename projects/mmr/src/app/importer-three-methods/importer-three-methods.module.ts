import { StyleCodeModule } from 'projects/lib-all/src/lib/styles/directives/style-code/style-code.module';
import { MyButtonsModule } from 'projects/lib-all/src/lib/styles/directives/style-code/my-buttons.module';

import { AppWideIconsModule } from './app-wide-icons.module';
//import { LibBreadcrumbModule } from './../lib-breadcrumb/lib-breadcrumb.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImporterThreeMethodsComponent } from './importer-three-methods.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [ImporterThreeMethodsComponent],
  imports: [
    MatProgressSpinnerModule,
    MyButtonsModule,
    CommonModule,
    AppWideIconsModule,
    MatProgressSpinnerModule,
    StyleCodeModule

  ],
  exports: [ImporterThreeMethodsComponent]

})
export class ImporterThreeMethodsModule { }
