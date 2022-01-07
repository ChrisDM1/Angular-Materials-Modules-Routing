import { MenuArray } from './menu.config';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './../../../styles/material/material.module';
import { SdNavComponent } from './sd-nav.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavAComponent } from './nav-a/nav-a.component';
import { NavBComponent } from './nav-b/nav-b.component';
import { NavCComponent } from './nav-c/nav-c.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SdNavComponent,NavAComponent, NavBComponent, NavCComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule //NEED TO REMOVE THIS??
  ],
  providers: [],
  exports: [SdNavComponent,NavAComponent, NavBComponent, NavCComponent]
})
export class SdNavModule { 
  public static forRoot(configuration:MenuArray): ModuleWithProviders<SdNavModule>{
    return {
      ngModule: SdNavModule,
      providers:[{
        provide: MenuArray,
        useValue: configuration}]
    };
  }

}
