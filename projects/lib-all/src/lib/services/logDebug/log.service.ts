import {ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  private tempArray:any=[];

  private save:boolean=false;

  g(...logs:any[]){
    let logKey=logs[0];

    //CREATE A TEMPORARY ARRAY for SIMPLE PUSHES IF set to SAVE
    this.checkThisSectionSaveOption(logKey);
          
     if(this.checkThisSectionState(logKey)){
                   //item 0 is key, 1 is first log sent in 
         for (var i = 1; i < logs.length; i++){
          
           let logThis=logs[i];     
           let l:any=logThis;
           if(typeof logThis=='string'){l=logKey+": "+logThis;}
           console.log(logThis);

          if(this.save)this.tempArray.push(logThis);
         }  
     if(this.save)eval('this.lObj.'+logKey+'=this.tempArray');
      }
   }

 
 checkThisSectionState(logKey:string){
  return eval('this.lObj?.'+logKey+'[0]');
 }

 checkThisSectionSaveOption(logKey:string){
  this.save= eval('this.lObj?.'+logKey+'[1]');
  if(this.save){
    this.tempArray=[];
    eval('this.tempArray=this.lObj.'+logKey);
   }
  }
 
  clearLogs(logKey:string){
    eval('this.lObj.'+logKey+'=this.lObj.'+logKey+'.slice(0,3)')
   }
     
 lObj={
  /*side_service 
             log, saveLogs, show States */   
      ss_ck:[false,false,false,'ss_ck Logs:'],
      ss_sm:[false,false,false,'ss_sm Logs:'], //selectMenu  
      nav_a:[false,false,false,'nav_a Logs:'],
      nav_b:[false,false,false,'nav_b Logs:'],
      nav_c:[false,false,false,'nav_c Logs:'],
      szst_trns:[false,false,false,'szst_trns Logs:'],
    
  /*imgFbk*/  
      imgFbk:[false,false,false,'imgFbk Logs:'],
   
      
  /*myFormService*/
      f_s:[false,false,false,'Form Service:'],   
  
   /*style*/
   slt:[false,false,false,'SLT:']       

 }


 returnKeysArray(){
  let keyArray=[];
  for(var key in this.lObj) { keyArray.push(key) }	
  return keyArray;				    
}

setLog(key:string){
  eval('this.lObj.'+key+'[0]=!this.lObj.'+key+'[0]');
}

saveLog(key:string){
  eval('this.lObj.'+key+'[1]=!this.lObj.'+key+'[1]');
}

setState(key:string){
  console.log('in SHow State');
  eval('this.lObj.'+key+'[2]=!this.lObj.'+key+'[2]');
}

showState(logKey:string){
  return eval('this.lObj.'+logKey+'[2]');
}

isLogTrue(logKey:string){
  return eval('this.lObj.'+logKey+'[0]');
}

isSaveTrue(logKey:string){
  return eval('this.lObj.'+logKey+'[1]');
}

b(logKey:string){
  return eval('this.lObj.'+logKey+'[2]');
}

clickedThis(){
  alert("Clicked");
}

}


