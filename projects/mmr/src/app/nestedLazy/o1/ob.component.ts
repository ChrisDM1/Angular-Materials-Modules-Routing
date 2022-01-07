import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'oneb',
  template: `
  <div style="border:2px solid blue;padding:5px;margin-bottom:5px;">one B
    <span style="font-size:8px;">declared in </span>
    <span style="font-size:10px;">app.module</span>
    <two></two>
  </div>
  `,
  styles: [
  ]
})
export class oneb  {

  constructor() { }

  ngOnInit(): void {
  }

}
