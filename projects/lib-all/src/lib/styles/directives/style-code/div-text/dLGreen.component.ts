import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mlg',
  template: `<span class="myColor"><ng-content ></ng-content></span>`,
  styles: [`.myColor{color:#49BFAA;}
  `]
})
export class LGreenComponent  {

  constructor() { }



}
