import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mPop',
  template: '<span class="myColor"><ng-content ></ng-content></span>',
  styles: [`.myColor{color:#608B4E;}
  `]
})
export class PopCommentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
