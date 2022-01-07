import { Injectable } from '@angular/core';
import { LogService } from 'projects/lib-all/src/lib/services/logDebug/log.service';

@Injectable({
  providedIn: 'root'
})
export class CustomLogService {

 //public lObj:any={};

  public pdLeft:any;
  

  constructor(public o:LogService){
    this.o.lObj={
      ...this.o.lObj,...this.newObject
 };
  }

  newObject:object={
          /*LOG , SAVE, STATES */  
    prv_pg:[true,true,false,'prv_pg Logs:'],

  /*admin*/
  add_st:[false,false,false,'Add Statements:'],
  add_g:[false,false,false,'Admin general:'], 

   /*match index*/
  mat_i:[false,false,false,'Match Index:'],


  };

  
  /********************************* */
  /*** PREVIEW PAGE               ** */
  /********************************* */

 
}