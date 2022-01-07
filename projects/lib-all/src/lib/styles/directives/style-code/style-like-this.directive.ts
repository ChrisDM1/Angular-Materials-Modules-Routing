import { Directive, ElementRef, HostListener, HostBinding, Input, OnInit  } from '@angular/core';

@Directive({
  selector: '[slt]'
})
export class StyleLikeThisDirective implements OnInit {

  constructor(private el: ElementRef) { }
  
  dbg=false;
  @Input('slt') styleString:any;

  ngOnInit(){
   
    let stylesArray=this.styleString.split(',');

    for(let i=0;i<stylesArray.length;i++){
    this.actualStyleProperty(stylesArray[i]);}

}

adjustValue(value:string){
  if(value.includes('px')){
    return value;
  }
  if(value.includes('%')){
   // value= value.split('p').pop()+'%';
    return value;
  }
  return '';
 
}

/* TO MAKE THIS EVEN COOLER, you could have a library of camel case versions */

actualStyleProperty(key:any){
  key=key.replace(/ /g,'');//remove any spaces
                                               if(this.dbg) console.log(key);
  let styleAbbrev = key.split('_').shift(); 
  let value = key.split('_').pop();
  let style='';
                                                if(this.dbg)  console.log(styleAbbrev+' '+value);
  switch(styleAbbrev){
    case 's':
     style=value.split(':').shift(); 
     value=value.split(':').pop();
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
    value=this.getColor(value);
    break;
    default:
                                                  if(this.dbg) console.log('Style Abbev not found');
    return;
  }
let command='this.el.nativeElement.style.'+style+'="'+value+'"';
                                                    if(this.dbg) console.log(command);
  eval(command);
}



getColor(value:string){
  if(value.includes('#')){
    return value;
  }
  console.log('HERE');
let colorsObject={
  wt:'white',
  red:'red'
};
  return eval('colorsObject.'+value);

}


}
