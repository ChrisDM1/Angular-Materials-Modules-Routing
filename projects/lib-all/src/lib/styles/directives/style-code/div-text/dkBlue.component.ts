import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mb',
  template: '<span [ngClass]="{myColor:true}"><ng-content ></ng-content></span>',
  styles: [`.myColor{color:#569CD6;}
  `]
})
export class BlueComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
