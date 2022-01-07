import { Component } from '@angular/core';

@Component({
  selector: 'mp',
  template: '<span class="myColor"><ng-content ></ng-content></span>',
  styles: [`.myColor{color:#C586C0;}
  `]
})
export class PurpleComponent  {

  constructor() { }

  
}
