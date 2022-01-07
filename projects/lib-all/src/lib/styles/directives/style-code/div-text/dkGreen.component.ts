import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'mg',
  templateUrl: './dkGreen.component.html',
  styles: [`.myColor{color:#608B4E;}
             span:hover{background-color:white;color:black;cursor:pointer;}
  `]
})
export class GreenComponent implements OnInit {

  constructor() { }
  private showHideString:string='';
  private show:boolean=false;

  @Input()eS: string='';
  ngOnInit() {
   this.showHideString=this.eS;
   this.eS='';
  }

  tgl(){
    if(this.show){
    this.eS='';
    this.show=false;
    } else{
    this.eS=this.showHideString;
    this.show=true;

  }
  }
}
