import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'xi',
  template: `
  <div style="border:2px solid orange;padding:5px;margin-bottom:5px;">
    <p>
      xi works!
    </p>
</div>
    `,
  styles: [
  ]
})
export class xi implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
