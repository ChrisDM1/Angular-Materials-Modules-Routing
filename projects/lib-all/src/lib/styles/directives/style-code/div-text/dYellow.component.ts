import { Component } from '@angular/core';

@Component({
  selector: 'my',
  template: '<span class="myColor"><ng-content ></ng-content></span>',
  styles: [`.myColor{color:#DCDCAA;}
  `]
})
export class YellowComponent  {

  constructor() { }

 
}
