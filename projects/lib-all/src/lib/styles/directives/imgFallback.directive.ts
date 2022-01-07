import { CustomLogService } from 'projects/@chris/squash-preview/src/app/services/custom/custom-log.service';
import { Directive, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'img[fallback]'

})
export class FallbackImgDirective {

constructor(public l:CustomLogService){

}

  @Input('src')mySrc:string='';
  
  @HostBinding('src') get src() {
     return this.mySrc;
   };

   @HostBinding('fallback') get getFallback() {this.l.o.g('imgFbk',"NOT EQUALLED");                                                                   
    return this.fallback;
  }; 
  

  @Input() fallback: string='';

  @HostListener('error')
  onError() {
                                                                   this.l.o.g('imgFbk','ERRRORORORR');
    //Why Timeout? angular gets confused when the src changes too quickly after it's been checked
    //Production mode wouldn't need it, could have a bool on production mode
   setTimeout(()=>{
    this.mySrc=this.fallback;},100);}
  
}
