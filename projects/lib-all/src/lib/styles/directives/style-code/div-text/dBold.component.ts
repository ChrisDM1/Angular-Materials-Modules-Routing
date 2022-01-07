import { Component } from '@angular/core';

@Component({
  selector: 'mBld',
  template: '<span [ngClass]="{myBold:true}"><ng-content ></ng-content></span>',
  styles: [`.myBold{font-weight: bold;}
  `]
})
export class BoldComponent  {

  constructor() { }

 
}
