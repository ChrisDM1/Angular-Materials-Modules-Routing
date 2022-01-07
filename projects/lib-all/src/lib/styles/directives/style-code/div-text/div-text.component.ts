import { Component, OnInit } from '@angular/core';
import * as myGlobals from '../globals';

@Component({
  selector: 'mdiv',
  template: `<span [ngClass]="{myHtml:true,gen:true}" >{{G.div}}</span>`,
  styles: ['.gen {font-family: Calibri;}.myHtml{color: #569CD6}']
})
export class DivTextComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 
 G=myGlobals;

}
