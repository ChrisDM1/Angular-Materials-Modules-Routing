import { Directive,Input, Renderer2, ElementRef, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[left]'
})
export class LeftDirective implements OnInit{

  constructor(private renderer: Renderer2, private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'blue';
  }

  @Input()leftPx:string='200px';

  ngOnInit() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'border-left',
      '2px dashed olive'
    );
  }

  @HostBinding('style.left') get mySetLeft() { return this.leftPx } 

}
