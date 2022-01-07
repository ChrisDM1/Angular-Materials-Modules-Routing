import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CustomStyleCodeService } from '../../services/custom/custom-style-code.service';

@Component({
  selector: 'params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.scss']
})
export class ParamsComponent implements OnInit {

  
myParamString:string;
myParamSubscribeString:string='x';
//myUrl:string;

  constructor(private activatedRoute: ActivatedRoute,public sc:CustomStyleCodeService) {
    //1) SNAPSHOT grabs the incoming parameter defined in the input 
    this.myParamString = activatedRoute.snapshot.params.myParam;
    //in the guidebook but not important
    // this.myUrl = activatedRoute.snapshot.url.join('c');
    // const user = activatedRoute.snapshot.data.user;

    //2) SUBSCRIPTION will update variables within the class even if the same component is reloaded.   
    this.activatedRoute.params.subscribe(
      (param:any) => this.myParamSubscribeString = param.myParam
); 
  }

  ngOnInit(): void {
   
  }

   


 

}
