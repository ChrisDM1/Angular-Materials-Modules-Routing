import { div } from './../../../../lib-all/src/lib/styles/directives/style-code/globals';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'outlet',
  template: `
   <div style='display:block;width 500px;height:500px; background-color:lightgrey;'>
    <h1>Outlet Component</h1>
    </div>
  `,
  styles: [
  ]
})
export class OutletComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
