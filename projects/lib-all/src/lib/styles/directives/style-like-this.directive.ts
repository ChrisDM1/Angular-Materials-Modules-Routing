import { LogService } from './../../services/logDebug/log.service';
import { Directive, ElementRef, HostListener, HostBinding, Input, OnInit, SimpleChanges  } from '@angular/core';

@Directive({
  selector: '[slt]'
})
export class StyleLikeThisDirective implements OnInit {

  constructor(private el: ElementRef,private l:LogService) { }
  
  dbg=true;
  @Input('slt') stylesArray:any=[];

  ngOnInit(){                                               
}


ngOnChanges(changes: SimpleChanges){                          this.l.g('slt','*** SLT ***   onChanges',this.stylesArray); 



  for(let i=0;i<this.stylesArray.length;i++){
    this.actualStyleProperty(this.stylesArray[i]);}

  }

adjustValue(value:string | undefined){
  if(value?.includes('px')){
    return value;
  }
  if(value?.includes('%')){
   // value= value.split('p').pop()+'%';
    return value;
  }
  return '';
 
}

/* TO MAKE THIS EVEN COOLER, you could have a library of camel case versions */

actualStyleProperty(item:any){
  let key='';
  
  if(typeof item  == 'string'){ key=item}
  else{
   
    key=item.k;
  }
  key=key.replace(/ /g,'');//remove any spaces

  let styleAbbrev = key.split('_').shift();                   
  let value:string | undefined = key.split('_').pop();
  let style:string | undefined='';

                                                this.l.g('slt','key: '+key,styleAbbrev+' '+value); 
                                               
  switch(styleAbbrev){
    case 's':
     style=value?.split(':').shift(); 
     value=value?.split(':').pop();
     break;
    case 'fntSz':
        style='fontSize';
    break;
    case 'wid':
    style='width';
    value=this.adjustValue(value);
    break;
    case 'colr':
    case 'bg':
    styleAbbrev=='bg'?style='backgroundColor':style='color';
          if(item.x){value=this.getColor(value);}else{
                     value='transparent';
          }
    break;
 
    default:
                                                                      this.l.g('slt','Style Abbev not found');
    return ;
  }

let command='this.el.nativeElement.style.'+style+'="'+value+'"';      this.l.g('slt','command:'+command);

  eval(command);
}



getColor(value:string | undefined){
                                                                      this.l.g('slt','in getColor: '+value);
  let colorsObject={
     wt:'white',
     red:'red'
  };

    if(value){
        if (value in colorsObject){
                eval('value=colorsObject.'+value);
                return eval('colorsObject.'+value);
        }
    }
                                                                      this.l.g('slt','returning value: '+value);
   return value; 
  }//getColor
}
