import { Component } from '@angular/core';

@Component({
  selector: 'mw',
  template: '<span class="myColor"><ng-content ></ng-content></span>',
  styles: [`.myColor{color:white;}
  `]
})
export class WhiteComponent  {

  constructor() { }

 
}
