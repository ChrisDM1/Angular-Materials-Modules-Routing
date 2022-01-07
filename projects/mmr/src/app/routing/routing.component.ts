import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.scss']
})
export class RoutingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public variableName="/routingXXXX";
    toggleRoute() {
        this.variableName == "/routing"?this.variableName = "/routingXXXX":this.variableName = "/routing";
      }

}
