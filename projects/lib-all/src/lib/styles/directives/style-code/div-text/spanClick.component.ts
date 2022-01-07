import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mCk',
  template: `<span style="color:rgb(0, 110, 255);cursor:pointer" ><ng-content></ng-content></span>`,
  styles: []
})
export class SpanClickComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 
}
