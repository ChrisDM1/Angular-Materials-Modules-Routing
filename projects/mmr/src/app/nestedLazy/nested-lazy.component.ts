import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nested-lazy',
  templateUrl: './nested-lazy.component.html',
  styleUrls: ['./nested-lazy.component.scss']
})
export class NestedLazyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  hardcode=false;
  @Input() declaredSection:boolean=false;
}
