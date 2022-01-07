import { Component } from '@angular/core';

@Component({
  selector: 'bgBlkDiv',
  template: `<div style="background-color:black;color:white"><ng-content ></ng-content></div>`,
  styles: []
})
export class BgBlkDivComponent {

  constructor() { }

 
}
