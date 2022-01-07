import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'activated',
  templateUrl: './activated.component.html',
           styles: [`.myActiveClass{color:red}
                     .myActiveClassBorder{border:1px solid red}
                     `]
})
export class ActivatedComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  
  
}
