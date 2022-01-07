import { SizeStateServiceNav } from 'projects/lib-all/src/lib/styles/size-state/size-state-nav.service';
import { Injectable } from '@angular/core';
import { CustomLogService } from './custom-log.service';

@Injectable({
  providedIn: 'root'
})
export class CustomSizeStateService  {

  constructor(public ssh:SizeStateServiceNav,public l:CustomLogService){}


  public halfScreenHt:number = 250;
  public halfScreenWdth:number = 500;
  public picSpacerLR:number=50;
  public hlfPicSpacer:number=25;
  public mb:boolean=false;


  public hlfOutHt:number=250;
  public hlfOutWdth:number=250;



 async screenResized() {

    this.mb=this.ssh.mb;
     this.halfScreenHt=this.ssh.screenHt/2;
     this.halfScreenWdth=this.ssh.screenWdth/2;

     this.hlfOutWdth=this.ssh.rtrOutWdth/2;                    
     this.setPreviewPage();
    // this.l.o.returnKeysArray();
   

  }
 
  public h2hFnt:string='30px';
  public prvFnt:string='15px';
  public statFnt:string='14px';


  makePicsFontSmall(){
    this.h2hFnt='15px';
    this.prvFnt='12px';

    
    this.picSpacerLR=0; 
    this.hlfPicSpcr=0;
    this.picSpcr=0;
    this.picWdth=50;
    this.picHtPx=(this.ssh.rtrOutWdth/2);
                       
  }


  public picHtPx:number=250;
  public picHt:number=250;
  public picWdth:number=50;
  public picSpcr:number=30;
  public hlfPicSpcr:number=30;
  public remainingSpace:number=50;
  public designMode:any={};

  setPreviewPage(){


    /********************8 
     NOT MOBILE  LARGE 
    /********************8 */

    if(this.ssh.layout=='l'||!this.ssh.mb){
      this.picHtPx=(this.ssh.screenHt/2)-50;
      this.picWdth=((this.picHtPx)/(this.ssh.rtrOutWdth))*100;
    
      this.h2hFnt='50px';
      this.remainingSpace=100-(this.picWdth*2);
      

          if(this.remainingSpace>2){        this.designMode={mode:'Landscape or NOT Mobile, Remaining Space greater than Zero',color:'blue'};
            this.picSpcr=this.remainingSpace/3;
            this.hlfPicSpcr=this.picSpcr/2;

          }else{                            this.designMode={mode:'Landscape or NOT Mobile, Remaining Space ***** LESS than Zero',color:'red'};          
            this.makePicsFontSmall();                               

          }
  this.prvFnt='20px';


  /********************8 
       MOBILE
    /********************/

    } else {

      this.designMode={mode:'NOT Landscape OR is Mobile < 600px',color:'green'};
      this.makePicsFontSmall();
    }

  }

  spcr(){

    if(this.ssh.mb)return '5px';
    if(this.ssh.screenWdth<1000)return '10px';
    return '20px';
  }

rtnSummPdg(){
  let p=0;
  let t=15;
  if(this.ssh.s.smb.bl){p=5;}
  if(this.ssh.s.mmb.bl){p=12;}
  if(this.ssh.s.sml.bl){p=30;}
  if(this.ssh.s.smlMd.bl){p=40;}
  if(this.ssh.s.md.bl){p=50;}
  if(this.ssh.screenWdth>1200){p=150;t=25;}
  return  t+'px '+p+'px 0px '+p+'px';
}

}
