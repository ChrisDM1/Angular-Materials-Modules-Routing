import { MenuStateService } from './menu-state.service';
import { LogService } from 'projects/lib-all/src/lib/services/logDebug/log.service';

import { ThemeService } from 'projects/lib-all/src/lib/styles/my-theme/my-theme.service';
import { SizeStateServiceNav } from 'projects/lib-all/src/lib/styles/size-state/size-state-nav.service';

import { Location} from '@angular/common';
import { Injectable} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MenuArray } from './menu.config';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MenuService  {

  constructor(public ssh:SizeStateServiceNav,
              public eme:ThemeService,
              public l:LogService,
              public menu:MenuArray,
              public mSt:MenuStateService,
              private router: Router,private activatedRoute:ActivatedRoute,
              private location: Location
              ) {

    this.parentMenu=this.menu.parentMenu;
   }

   mouseLeftNavB(){
    setTimeout(() => {
      if(this.mSt.sNavB_OpenBool){this.sNavB_Close();this.mSt.sNavB_OpenBool=false;}

    }, 200);
   }

  public y=false;
  public logged=["hello",{y:"works!"}];

/*********************************************************************
  _   _               ____  
 | \ | | __ ___   __ | __ ) 
 |  \| |/ _` \ \ / / |  _ \ 
 | |\  | (_| |\ V /  | |_) |
 |_| \_|\__,_| \_/   |____/ 
                            

 ************************************************************/
  
  public sNavB_Toggle(){           
                                                   this.l.g('nav_a','MOVE RIGHT bLeftDest: '+this.ssh.mSt.bLeftDest);
    this.mSt.sNavB_OpenBool?this.sNavB_Close():this.sNavB_Open();
    this.mSt.sNavB_OpenBool=!this.mSt.sNavB_OpenBool;
  }
  
  public sNavB_Open(){                //Logs                                                                                                           
    //Instant move to just inside b    
    this.ssh.mSt.sNavBLeft=this.ssh.mSt.bLeftOrigin;
    this.ssh.mSt.transition('sNavBLeft',this.ssh.mSt.bLeftDest,'x');                 this.l.g('nav_a','bLeftOrigin: '+this.ssh.mSt.bLeftOrigin,'MOVE RIGHT bLeftDest: '+this.ssh.mSt.bLeftDest,'sNavBLeft: '+this.ssh.mSt.sNavBLeft,"mb: "+this.ssh.mb);
  }                                                                 

  public sNavB_Close(){
    if(this.mSt.sNavC_OpenBool){this.sNavC_Close();this.mSt.sNavC_OpenBool=false;}
                                                                       // this.l.g('nav_a','sNavALeft: '+this.ssh.sNavALeft,'sNavBWidth: '+this.ssh.sNavBWidth,'MOVE LEFT newLefft: '+newLeft);
this.ssh.mSt.transition('sNavBLeft',this.ssh.mSt.bLeftOrigin,'x');
   
  }

/*********************************************************************

  _   _                ____ 
 | \ | | __ ___   __  / ___|
 |  \| |/ _` \ \ / / | |    
 | |\  | (_| |\ V /  | |___ 
 |_| \_|\__,_| \_/    \____|
                            

 *********************************************************************/

 
public sNavC_Toggle(){                                                                
this.mSt.sNavC_OpenBool?this.sNavC_Close():this.sNavC_Open();
this.mSt.sNavC_OpenBool=!this.mSt.sNavC_OpenBool;
                                                              this.l.g('nav_c',"sNavC_OpenBool: "+this.mSt.sNavC_OpenBool);
}

public sNavC_Open(){
  //Instant move to just inside b    
  //IF B already Open, instantly place inside it
  if(this.mSt.sNavB_OpenBool) {    
                              //MOBILE Right                    
                              if(this.ssh.mb){
                                this.ssh.mSt.sNavCLeft=this.ssh.screenWdth;
                                this.ssh.mSt.cLeftDest=this.ssh.screenWdth-this.ssh.mSt.sNavCWidth;
                                     } else {  
                              //DESK LEFT          
                              this.ssh.mSt.sNavCLeft=this.ssh.mSt.sNavBLeft+this.ssh.mSt.sNavBWidth-this.ssh.mSt.sNavCWidth;
                              //set dest variable to be placed in mSt.transition    
                              this.ssh.mSt.cLeftDest=this.ssh.mSt.sNavBLeft+this.ssh.mSt.sNavBWidth;}
                              }
    //IF B Closed, instantly place to cLeftOrigin set to navArgt - cWidth in ssh.
  if(!this.mSt.sNavB_OpenBool&&!this.ssh.mb) {this.ssh.mSt.sNavCLeft=this.ssh.mSt.cLeftOrigin;
                                this.ssh.mSt.cLeftDest=this.ssh.mSt.navARgt;                                
                                }

         
                                                                                     this.l.g('nav_c','OPEN cLeftDest: '+this.ssh.mSt.cLeftDest);
  this.ssh.mSt.transition('sNavCLeft',this.ssh.mSt.cLeftDest,'x');

}

public sNavC_Close(){                                                               //Logs                                 
this.ssh.mSt.transition('sNavCLeft',this.ssh.mSt.cLeftOrigin,'x');  this.l.g('nav_c','HIDE cLeftDest: '+this.ssh.mSt.cLeftDest);
}

/*********************************************************************

*********************************************************************/

   allNavsFalse(){
    this.mSt.menuTwo=true;
    console.log('menuttwo true');
    this.mSt.navOne=false;
    this.mSt.navTwo=false;
    this.mSt.navTree=false;
}

public selectedParentMenu: any = null;
public selectedChildMenu: any = null;
                                    //ss_sm 
selectMenu(menu:any,childType:string){                                                                                       this.l.g('ss_sm','In selectMenu');
                                let menuDo='nothing';let skip=false;let childMenuExists=false;let childMenuHasChildren=false;let linkExists=false;  
                                
                                if(eval('"'+childType+'"'+' in menu')){                                             
                            childMenuExists=true;                                                                             this.l.g('ss_sm','childMenuExists');   //this.logged.push('childMenuExists')
                                                if(eval('menu?.'+childType+'.length !== null')){                              this.l.g('ss_sm','childMenuHasChildren'); 
                            childMenuHasChildren=true; }
                                                          }

                                if(eval('menu?.link !== null')){
                            linkExists=true;}

                                if(!childMenuExists&&!linkExists){                                  
    menuDo='nothing';
                                if(menu.label=='Back'){
    menuDo="goBack";                              
                                }                    
  }
                               
                                            
                                if(!childMenuExists && linkExists){
    menuDo='go_to_router';}
                                if(childMenuExists&&childMenuHasChildren){
    menuDo='open_childMenu'}
                              

                                                                                                                          this.l.g('ss_sm','menuDo: '+menuDo);

    switch(menuDo){
      case 'nothing':break;/*toast mentions there is currently no action here*/
      case 'goBack':
        
          this.location.back(); 
     
            break;
      case 'go_to_router':
        let route:any={link:menu.link,params:{}};
        if(menu.params)route.params=menu.params;
        this.routeThis(route);     
                   break;
      case 'open_childMenu': 

          //TOGGLE PARENT MENUS
          if(menu == this.selectedParentMenu){this.selectedParentMenu = null; } else {                                                                           
                                                if(childType=='childMenu'){this.selectedParentMenu = menu;                         this.l.g('ss_sm','selected parentMenu: ',this.selectedParentMenu); 
                                                                                                        }  
                                                                                    }
          //TOGGLE CHILD MENUS                                                                           
          if(menu == this.selectedChildMenu){this.selectedChildMenu = null; }  else {                                            
                                                if(childType=='grandChildMenu'){this.selectedChildMenu = menu;                   this.l.g('ss_sm','selected childMenu: ',this.selectedChildMenu);
                                                                                                             }
                                                                                }
          break;
        }   
        
        



  }
  


public menuHover:any;  
mouseEnter(menu:any){
    this.menuHover=menu;
    }

activeWeight(menu:any){
    if(this.menuHover==menu){
        return 575;
    }
        return 'normal';

}  

activeColor(menu:any){
    if(menu==this.selectedParentMenu||menu==this.selectedChildMenu||this.menuHover==menu){
        return this.eme.h.primary;
    }
        return '';

}


public parentMenu:any = [];

public routePath = new BehaviorSubject<any>({link:'',params:{}});
public routePath$ = this.routePath.asObservable();

routeThis(route:any){
console.log(route);
  this.sNavB_Close();this.mSt.sNavB_OpenBool=false;
  console.log('routing this: '+route.link);
  console.log(route.params);
  this.routePath.next(route);
} 

routeThisString(routeString:string){
  let x = JSON.parse(routeString);
  this.routeThis(x);
}



}
