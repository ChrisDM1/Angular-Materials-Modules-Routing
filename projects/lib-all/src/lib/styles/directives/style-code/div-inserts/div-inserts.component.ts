import { Component, OnInit,Input } from '@angular/core';
import * as myGlobals from '../globals';

@Component({
  selector: 'div-inserts',
  templateUrl: './div-inserts.component.html',
  styleUrls: ['./div-inserts.component.css']
})
export class DivInsertsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  G=myGlobals;

  @Input() simpleSelector=false;
  @Input() simpleSelectorDirective=false;
  @Input() simpleSelectorDeclare=false;
  @Input() simpleSelectorDatabind=false;
  @Input() simpleSelectorDatabindTwo=false;
  @Input() declareDirective=false;
  @Input() defaultsDiv=false;
  @Input() defaultsDirective=false;
  @Input() myIfSection=false;

}
