import { Component } from '@angular/core';

@Component({
  selector: 'bgBlkSpn',
  template: `<span style="background-color:black;color:white"><ng-content ></ng-content></span>`,
  styles: []
})
export class BgBlkSpanComponent {

  constructor() { }

 
}
