import { Component, OnInit } from '@angular/core';
import * as myGlobals from '../globals';

@Component({
  selector: 'mdivc',
  template: `<span [ngClass]="{myHtml:true,gen:true}" >{{G.divc}}</span>`,
  styles: [`.gen {font-family: Calibri;}.myHtml{color: #569CD6}`]
})
export class DivCloseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 
 G=myGlobals;

}
