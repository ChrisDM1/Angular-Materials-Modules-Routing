import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { two } from './two.component';
import { three } from './three/three.component';
import { threeX } from './three/three-x/three-x.component';



@NgModule({
  declarations: [two, three, threeX],
  imports: [
    CommonModule
  ],
  exports:[two,three]
})
export class TwoModule { }
