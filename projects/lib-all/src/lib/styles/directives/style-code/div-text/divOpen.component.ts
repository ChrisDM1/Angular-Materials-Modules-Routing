import { Component, OnInit } from '@angular/core';
import * as myGlobals from '../globals';

@Component({
  selector: 'mdivo',
  template: `<span [ngClass]="{myHtml:true,gen:true}" >{{G.divo}}</span>`,
  styles: [`.gen {font-family: Calibri;}.myHtml{color: #569CD6}`]
})
export class DivOpenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 
 G=myGlobals;

}
