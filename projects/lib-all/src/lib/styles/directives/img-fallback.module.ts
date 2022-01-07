import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FallbackImgDirective } from './imgFallback.directive';



@NgModule({
  declarations: [FallbackImgDirective],
  imports: [
    CommonModule,
  ],
  exports:[FallbackImgDirective]
})


export class ImgFallbackModule { }
