import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cBox',
  template: `<div>
<ng-content></ng-content>
</div>`,
  styles: [`:host {
  display:block;
 
  border-style:solid;
  border:1px solid lightgrey;
  background-color:#333030;
  color:white;
  padding:5px 5px; 
  word-break:break-all;
  overflow:hidden;
}
`]
})
export class CodeBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
