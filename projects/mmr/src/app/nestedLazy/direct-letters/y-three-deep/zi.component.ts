import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zi',
  template: `
  <div 
             style="border:3px solid grey;
             padding:5px;
             margin-bottom:5px;">
    <p>
      zi works!
    </p>
    </div>
  `,
  styles: [
  ]
})
export class zi implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
