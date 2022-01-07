import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bi',
  template: `
  <div   style="border:2px solid lightpink;padding:5px;margin-bottom:5px;"> 
    <p>
      bi works!
    </p>
  `,
  styles: [
  ]
})
export class bi implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
