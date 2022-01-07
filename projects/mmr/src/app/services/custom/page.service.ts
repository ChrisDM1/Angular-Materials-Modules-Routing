import { parentMenu } from 'projects/mmr/src/app/config/menu.config';

import { Injectable, HostListener,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { MenuService } from 'projects/lib-all/src/lib/structure/side/sd-nav/menu.service';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { matStepperAnimations } from '@angular/material/stepper';


@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor( private router: Router,public activatedRoute:ActivatedRoute,
               private ms:MenuService,private location: Location) { }

  private urlString:string='';
  private urlB4subscribe:string='/';



  ngOnInit(){                                 
    this.urlB4subscribe=this.router.url;  
  }
//////////////////////////////////////////////////////////////////////////////////////////////////////
/*LOADER SERVICE*/

addMenu(){
}
public pTAvdSbj = new BehaviorSubject<boolean>(false);
public pTArrived$ = this.pTAvdSbj.asObservable();

initData(){
  console.log('INIT DATA XXXXXXXXXXXXXXXXXXXXXXX');


      this.ms.routePath$.subscribe(()=>{
        var route=  this.ms.routePath.getValue();         console.log('Navigating BY URL:'+route.link);console.log(route.params);
        if(route){
          console.log("INSIDE ROUTE");
          //'' empty route directs to menu state load here if set 
          if(route.link==''&&this.ms.mSt.loadHere!=''||route.link==null&&this.ms.mSt.loadHere!=''){
            console.log("INSIDE ROUTE IF STATEMENT");
            console.log("mSt.loadHere: "+this.ms.mSt.loadHere);
              this.navigateUrl({link:this.ms.mSt.loadHere,params:{}},true);
            }
         
          this.navigateUrl(route,true);}
          }
                              );
      
}


navigateUrl(route:any,openLdrBool:boolean){

   //prevents reloads on startup, may have to adjust ot include params if problems appear
   if(route.link==this.location.path()&&route.link==''){  console.log("LINK WAS THE SAME location.path(): "); 
    return;
    }

  if (Object.keys(route.params).length === 0) { this.router.navigate([route.link]);}

             this.router.navigate([route.link], { queryParams: route.params });
}




}
