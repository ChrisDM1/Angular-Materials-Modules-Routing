import { Component, OnInit, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { EasingLogic, PageScrollService, PageScrollInstance } from 'ngx-page-scroll-core';
 

@Component({
  selector: 'ngx-scroll',
  templateUrl: './ngx-scroll.component.html',
  styleUrls: ['./ngx-scroll.component.scss']
})
export class NgxScrollComponent  {

  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) { }


 currentIndex=-1;

 simpleFeatures=[
   {x:'Scroll only when not in view',y:'[pageScrollInView]="false"'},
   {x:'Non-interruptable',y:'[pageScrollInterruptible]="false"[pageScrollDuration]="4000"' },
   {x:'pixel/sec speed',y:'[pageScrollSpeed]="800"'},
   {x:'Offset',y:'[pageScrollOffset]="150/-150"'},
   {x:'Duration',y:'[pageScrollDuration]="350"'},
   {x:'Finish Event',y:'(pageScrollFinish)="doSmth($event)"'},
   {x:'Add Hash/fragment to url',y:'[pageScrollAdjustHash]="true"'},
   {x:'Custom Easing',y:'[pageScrollEasing]="myEasing" (can add [pageScrollDuration]="5000") || .ts  public myEasing: EasingLogic = (t: number, b: number, c: number, d: number): number => '},
   {x:'Dynamic Target',y:'[href]="dynamicSelectedTarget" || set this target variable however you like'}
 ];

setCurrentIndex(i:number){
  if(i==this.currentIndex){
    this.currentIndex=-1
  }else{
    this.currentIndex=i;
  }
}

@ViewChild('basicContainer')
    public basicContainer!: ElementRef;
@ViewChild('complexContainer')
    public complexContainer!: ElementRef;

public scrollInsideComplex() {
  const subscriber = new EventEmitter<boolean>();
  subscriber.subscribe((val) => {
    // Reached last heading
    alert("scrollFinishListener subscriber called, now run scrollInsideBasic");
    this.scrollInsideBasic();
  });

  const pageScrollInstance: PageScrollInstance = this.pageScrollService.create({
    document: this.document,
    scrollTarget: '#targetComplex',
    scrollViews: [this.complexContainer.nativeElement],
    advancedInlineOffsetCalculation: true,
    scrollFinishListener: subscriber,
  });
  this.pageScrollService.start(pageScrollInstance);
}

public scrollInsideBasic() {
  const pageScrollInstance: PageScrollInstance = this.pageScrollService.create({
    document: this.document,
    scrollTarget: '#targetBasic',
    scrollViews: [this.basicContainer.nativeElement],
  });
  this.pageScrollService.start(pageScrollInstance);
}



}
