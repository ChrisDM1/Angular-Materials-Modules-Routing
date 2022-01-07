import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mr',
  template: '<span [ngClass]="{myColor:true}"><ng-content ></ng-content></span>',
  styles: [`.myColor{color:red;}
  `]
})
export class RedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
