import { LogService } from '../../../services/logDebug/log.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MenuStateService {

  constructor(public l:LogService) {}

  public loadHere='';
  public y=false;
  public navOne=false;
  public navTwo=false;
  public navTree=false;
  public xTrait=false;
  public menuTwo=true;
  public debugOpen=false;

  public logged=["hello",{y:"works!"}];
  public sNavZ_IconBool = true;
  public sNavA_OpenBool =true;
  public sNavB_OpenBool =false;
  public sNavC_OpenBool =false;

public sNavALeft:number=0;
public sNavAWidth:number=50;  
public sNavAHt:string='100%';
public sNavARds:string='0px';
public navARgt:number=0;

public sNavBLeft:number=-150;
public sNavBWidth:number=300;
public bLeftOrigin:number=0;
public bLeftDest:number=0;

public sNavCLeft:number=-50;
public sNavCWidth:number=100;
public cLeftOrigin:number=0;
public cLeftDest:number=0;
public cNavZIndex:number=10001;

private initialized = false;
setNav(mb:boolean,screenWdth:number){

  /*
  this.sNavA_OpenBool=false;
  this.sNavB_OpenBool=false;
  this.sNavC_OpenBool=false;*/

  if(mb){

    this.sNavAHt='50px';
    this.sNavARds='50px';
    //this.sNavA_OpenBool=false;
    this.bLeftOrigin=-this.sNavBWidth;
    this.bLeftDest=this.sNavALeft; 
    this.navARgt=0;
    this.cLeftOrigin=screenWdth;
    this.cNavZIndex=10004;

  } else {
    this.sNavAHt='100%';
    this.sNavARds='0px';
    this.bLeftOrigin=this.sNavAWidth-this.sNavBWidth;
    this.bLeftDest=this.sNavAWidth; 
    this.navARgt=this.sNavAWidth;
    
    this.cLeftOrigin=this.navARgt-this.sNavCWidth; 
    this.cNavZIndex=10001;

  }
  if(!this.initialized){
    this.sNavBLeft=this.bLeftOrigin;
    this.initialized=true;
  } 
    this.sNavCLeft=this.cLeftOrigin;
 
}



    /*******************************************88  
     * FURTHER Implementation could include an array of elements that all adjust simultaneousely 1) Setup the array values that are passed in here: iterateTransition(styleVname:string,current:number,difference:number,plusMinus:number) 2) then loop through each of the styles inside the 100 loop,3) TIming may need to be adjusted as well
    */

     transition(styleVname:string,toNumber:number,type:string){                                                                                this.l.g('szst_trns',"styleVname :"+styleVname);
                                                                                  
     let currentNumericalValue:number=0;                                                                          
                                                                                                         this.l.g('szst_trns',"type :"+type);
    switch(type){
      case 'x':
      currentNumericalValue = this.getCurrentValue(styleVname);                                          this.l.g('szst_trns',"styleVname: "+styleVname,"currentNumericalValue :"+currentNumericalValue,"toNumber :"+toNumber);                  
      this.compareThenIterateValues(currentNumericalValue,toNumber,styleVname);
    
      break;
      case 'w,h,%':break;
    }
   }
  
   async iterateTransition(styleVname:string,current:number,difference:number,plusMinus:number){
  
                                                            this.l.g('szst_trns','***********iterateTransitions: **********');
                                                            this.l.g('szst_trns',"styleVname :"+styleVname);
  
  let adjustBy=difference/100;
                                                            this.l.g('szst_trns',"adjustBy :"+adjustBy);
                                       
                                                         
  for(let i=0;i<100;i++){
  
  current=current+(adjustBy*plusMinus);
   //eval('this.'+styleVname+'=current');
  this.sNavBLeft=current;
  await this.delay(1);
  }
  }
  
  
  getNumericalValue(valueString:string,removeNumber:number){ 
    return Number(valueString.slice(0, -removeNumber));
  }
  
  getCurrentValue(styleVname:string){
        let currentStringValue=0;  
        eval('currentStringValue='+'this.'+styleVname);           this.l.g('szst_trns',"currentStringValue :"+currentStringValue);                                                             
        return currentStringValue;
  }
  
  
  
  
  
  compareThenIterateValues(current:number,to:number,styleVname:string){
    let plusMinus =1;
    let difference =to-current;
    if(difference==0)return;
  
    if(current>to){
        plusMinus=-1;
        difference=current-to;
    }
    this.iterateTransition(styleVname,current,difference,plusMinus); 
  }
  
    nmbrVal(px:string){
     return Number(px.slice(0, -2));
    }
  
    delay(ms: number) {
      return new Promise( resolve => setTimeout(resolve, ms) );
  }
  
    
  
  
  
  
  

}
