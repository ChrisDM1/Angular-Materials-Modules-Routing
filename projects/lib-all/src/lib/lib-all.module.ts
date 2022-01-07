import { NgModule } from '@angular/core';
import { LibAllComponent } from './lib-all.component';
import { WindowComponent } from './structure/components/window/window.component';


@NgModule({
  declarations: [
    LibAllComponent,
    WindowComponent,
  
  ],
  imports: [
  ],
  exports: [
    LibAllComponent
  ]
})
export class LibAllModule { }
