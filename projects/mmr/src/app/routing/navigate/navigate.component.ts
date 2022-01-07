import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomStyleCodeService } from '../../services/custom/custom-style-code.service';

@Component({
  selector: 'navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.scss']
})
export class NavigateComponent{

 /*Router only needs to be imported when using the method calls below*/
constructor(private myRouter:Router, private myActivatedRoute: ActivatedRoute,public sc:CustomStyleCodeService){
}

n(){
 this.myRouter.navigate(['navigate'],{queryParams:{'query':100}});
}


  nQuery(){
   this.myRouter.navigate(['navigate'],{queryParams:{'query':100}});
 }

  myNavigateQuerySection(){
    console.log("IN QUERY SECTION");
   this.myRouter.navigate(['/',{outlets: {namedOutlet: 'outlet'}}])
 }
 
closeSection(){
  this.myRouter.navigate([ {outlets: {namedOutlet: null}}]);
}

}
