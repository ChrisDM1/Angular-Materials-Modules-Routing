import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'co',
  template: `
  <span (click)="sw=!sw">{{in}}</span>
  <span *ngIf="sw">
    <ng-content ></ng-content>
    </span>
  `,
  styles: [`
    :host{
      color:white;
    }`
  ]
})
export class ClickOpenComponent implements OnInit {

  constructor() { }
  @Input() in:string='';
  


  @Input() sw:boolean=false;
  ngOnInit(): void {
  }



}
