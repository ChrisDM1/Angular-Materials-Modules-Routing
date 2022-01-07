import { Directive, ElementRef, HostListener, HostBinding, Input, OnInit  } from '@angular/core';

@Directive({
  selector: '[so]'
})
export class StyleObjectDirective implements OnInit {

  constructor(private el: ElementRef) { }
  

  dbg=false;
  @Input('so') myStylesObject:any;

  ngOnInit(){
   Object.keys(this.myStylesObject).forEach(
     (key)=>{
                                                                          if(this.dbg){ console.log("key: "+key); console.log('USER STYLE OBJECT');console.log(this.myStylesObject);}
       if(key!=undefined){
       eval('this.el.nativeElement.style.'+key+'='+'this.myStylesObject.'+key);}}
  );
}

}
