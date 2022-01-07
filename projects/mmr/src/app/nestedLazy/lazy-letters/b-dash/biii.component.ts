import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'biii',
  template: `
  <div   style="border:2px solid purple;padding:5px;margin-bottom:5px;"> 

   <h4 style="color:purple">biii</h4>
   
   <h5 style="color:purple">&lt;bii&gt; <br/> &lt;c-exported&gt;</h5>
   <bii></bii>
   <c-exported></c-exported>
   </div>
  `,
  styles: [
  ]
})
export class biii implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
