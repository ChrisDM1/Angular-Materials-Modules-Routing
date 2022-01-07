import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fBox',
  template: `<div class="colMe"><ng-content></ng-content></div>`,
  styles: [`:host { 
  width:33.33%;
  border:3px solid lightgray;
  float:left;
  padding:20px 5px; 
  word-break: break-all;
}
#colMe{
 /* border: 1px solid yellow;*/
}
`]
})
export class FloatBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
