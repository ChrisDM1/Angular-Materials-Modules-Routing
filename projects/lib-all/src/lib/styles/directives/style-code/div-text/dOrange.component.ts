import { Component } from '@angular/core';

@Component({
  selector: 'mo',
  template: `<span [ngClass]="'myColor'"><ng-content ></ng-content></span>`,
  styles: [`.myColor{color:#CE9178;}
  `]
})
export class OrangeComponent  {

  constructor() { }

}
