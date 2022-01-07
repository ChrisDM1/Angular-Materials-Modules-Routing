import { Component, OnDestroy, OnInit } from '@angular/core';
import{Router,ActivatedRoute} from '@angular/router';
import {Subscription} from "rxjs";
import { CustomStyleCodeService } from '../../services/custom/custom-style-code.service';



@Component({
  selector: 'fragments-scroll',
  templateUrl: './fragments-scroll.component.html',
  styleUrls: ['./fragments-scroll.component.scss']
})
export class FragmentsScrollComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  myFragmentIndex:string='';
  fakeArray = new Array(50);

        constructor(private myRouter:Router, private myActivatedRoute: ActivatedRoute                              ,public sc:CustomStyleCodeService){
          this.subscription = this.myActivatedRoute.fragment.subscribe(
            f => {
            const fragment: HTMLElement | null = document.getElementById(f!);
            if (fragment)fragment.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}); 
          });

 }
 
   ngOnInit() {
   /*Always notice changes in the URL (NOTE: if you have an error in your code 
   it may break Mouse scroll, just re load progarm at the CLI)*/
 
   //Subscribe to the current Fragment & Scroll to it
  
   }
   fragmentInt:number=0;
   myNavigateToFragment(index:string){
     //This is the # / ID / Fragment of each division
     this.fragmentInt=parseInt(index);
     this.myFragmentIndex = 'fragment'+index;
     //TRICK the subscription into believing we have changed URL to top
     this.myRouter.navigate(['/fragments-scroll'],{fragment:'top'});
     
     //Set at timeout to make sure the url has been processed
     setTimeout(()=>{
       //Now run the URL you want...
       this.myRouter.navigate(['/fragments-scroll'],{fragment:this.myFragmentIndex});
     });
 
   }
 
 

ngOnDestroy(){
 this.subscription.unsubscribe();
 }
 
 
 }
 