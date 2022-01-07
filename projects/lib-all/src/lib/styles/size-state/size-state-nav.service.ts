import { MenuStateService } from './../../structure/side/sd-nav/menu-state.service';

import { Injectable,Inject } from '@angular/core';
import { LogService } from '../../services/logDebug/log.service';
import { DOCUMENT } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class SizeStateServiceNav {

constructor(public l:LogService,public mSt:MenuStateService, 
            @Inject(DOCUMENT) public document: Document) {
            }

public mb=false; 
  
public screenHt:number=500;  
public screenWdth:number=1000;

public layout='l';

public rtrOutleft:number=0;
public rtrOutWdth:any=250;


async screenResized() {
  
  this.screenWdth = window.innerWidth;
  this.screenHt = window.innerHeight;
  await this.setScreenSize();
  await this.getRtrOutWdth();               this.l.g('szst_trns','szst_trns','mb: '+this.mb,'rtrOutleft: '+this.rtrOutleft,
                                                            'screeenWidth: '+this.screenWdth,"rtrOutWdth: "+this.rtrOutWdth );  
  await this.mSt.setNav(this.mb,this.screenWdth); 
                                                                            
}



async getRtrOutWdth(){
  if(this.mb){this.rtrOutleft=0;}else{
    this.rtrOutleft=50;
  }
  this.rtrOutWdth=this.screenWdth-this.rtrOutleft;

}


public s={
  smb:  {sz:550,bl:false},//<500
  mmb:  {sz:650,bl:false},//500-650
  sml:  {sz:800,bl:false},//650-800
  smlMd:{sz:1000,bl:false},//800-1000
  md:   {sz:1200,bl:false},//1000-1200
  lg:   {sz:2000,bl:false},//1200-2000
  xLg:   {sz:3000,bl:false},//2000
  xXLg :   {sz:20000,bl:false}//100000
  }; 

// keyvalue don't sort method
u(){
return 0;
}

mx(maxWidth:number){
  return this.screenWdth<maxWidth?true:false;
}

setScreenSize(){
  this.screenWdth>this.screenHt?this.layout='l':this.layout='p';
  this.screenWdth<650?this.mb=true:this.mb=false;

  this.l.g('szst_trns','szst_trns','rtrOutleft: '+this.rtrOutleft);  
 

    let lowSz=-1;
    let highSz=0;

   for(var key in this.s) { 
    if(lowSz==-1){lowSz=0
                  }else{
                  eval('lowSz=highSz');}
    eval('highSz=this.s.'+key+'.sz');   
    let thisSizeBool=this.sz(lowSz,highSz,true);
    eval('this.s.'+key+'.bl=thisSizeBool');
      lowSz=highSz;
    }	
   
  }


  /* SET SCREEN SIZE HELPERS */

  sz(low:number,high:number,screenNotRouter:boolean){

    if(screenNotRouter){ 
              if(this.screenWdth>low&&this.screenWdth<high){
                    return true;
                } else{return false;}
    }else{
              if(this.rtrOutWdth>low&&this.screenWdth<high){
                return true;
              } else{return false;}
      }
  }

  //Takes in an id and if element exists returns it
  e(id:string){
    const loader: HTMLElement | null = document.getElementById(id);
    if(loader){
      return loader;
    } else return false;

  }



  

}




