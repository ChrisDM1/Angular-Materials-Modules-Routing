import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'c-exported',
  template: `
  <div   style="border:2px solid grey;padding:5px;margin-bottom:5px;"> 
    <p>
      c-exported works!
    </p>
    <img src="assets/images/nestedLazy/c-exported-imported.PNG" style="">
  </div>  
  `,
  styles: [
  ]
})
export class cExported implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}