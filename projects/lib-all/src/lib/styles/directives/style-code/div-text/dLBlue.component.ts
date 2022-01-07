import { Component } from '@angular/core';

@Component({
  selector: 'mlb',
  template: '<span class="myColor"><ng-content></ng-content></span>',
  styles: [`.myColor{color:#9CDCFE;}
  `]
})
export class LBlueComponent {

  constructor() { }

 
}
