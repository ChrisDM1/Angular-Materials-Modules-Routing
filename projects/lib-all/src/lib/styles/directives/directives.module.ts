import { LeftDirective } from 'projects/lib-all/src/lib/styles/directives/left.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyResizableDirective } from './my-resizable.directive';

@NgModule({
  declarations: [LeftDirective, MyResizableDirective],
  imports: [
    CommonModule,
  ],
  exports:[LeftDirective,MyResizableDirective]
})

export class DirectivesModule { }
