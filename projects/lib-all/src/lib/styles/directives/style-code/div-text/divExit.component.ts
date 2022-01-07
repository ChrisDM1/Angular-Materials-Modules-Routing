import { Component, OnInit } from '@angular/core';
import * as myGlobals from '../globals';

@Component({
  selector: 'mdive',
  template:`<span [ngClass]="{myHtml:true,gen:true}" >{{G.dive}}</span>`,
  styles: [`.gen {font-family: Calibri;}.myHtml{color: #569CD6}`]
})
export class DivExitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 
 G=myGlobals;

}
