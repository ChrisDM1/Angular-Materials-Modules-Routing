import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aComp',
  template: `<div 
             style="border:3px solid grey;
             padding:5px;
             margin-bottom:5px;">
           <h4>a - not declared in LazyLettersModule</h4>
           <p><strong>imported in router-outlet directly</strong></p>
           <img src="assets/images/nestedLazy/a-path.PNG">
           <p>
           Module: Not Declared<br/>
           Routing Module: imported<br/>
           <strong>Cannot place other components inside it or be placed in others</strong><br/>
           &lt;declared-in-lzyltrs-module&gt;&lt;/declared-in-lzyltrs-module&gt;
           <img src="assets/images/nestedLazy/a-not-declared-error.PNG">

            </div>`
})
export class a implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
