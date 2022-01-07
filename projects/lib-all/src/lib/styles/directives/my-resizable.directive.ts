import {
  Directive,
  Renderer2,
  ElementRef,
  OnInit,
  Output,
  Input,
  EventEmitter,
  OnDestroy,
  NgZone,
  OnChanges,
  SimpleChanges,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Subject, Observable, Observer, merge, EMPTY } from 'rxjs';
import {
  map,
  mergeMap,
  takeUntil,
  filter,
  pairwise,
  take,
  share,
  auditTime,
  switchMap,
  startWith,
  tap
} from 'rxjs/operators';
@Directive({
  selector: '[myResizable]'
})

//share()
//https://blog.strongbrew.io/how-share%28%29-can-reduce-network-requests/
export class MyResizableDirective {
  private pointerEventListeners: PointerEventListeners;

  public mousedown = new Subject<{
    clientX: number;
    clientY: number;
    //edges?: Edges;
  }>();


  public mousemove = new Subject<{
    clientX: number;
    clientY: number;
   // edges?: Edges;
    event: MouseEvent | TouchEvent;
  }>();


  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private renderer: Renderer2,
    public elm: ElementRef,
    private zone: NgZone
  ) {
    this.pointerEventListeners = PointerEventListeners.getInstance(
      renderer,
      zone
    );
  }

  @Output() dragWidth = new EventEmitter<string>();
  
 ngOnInit(): void {

  this.renderer.setStyle(
    this.elm.nativeElement,
    'border-left',
    '2px dashed olive'
  );
    const mousedown$: Observable<{
      clientX: number;
      clientY: number;
     // edges?: Edges;
    }> = merge(this.pointerEventListeners.pointerDown, this.mousedown);

    mousedown$
    .subscribe(() => {
      this.dragWidth.emit('200px');
      console.log('IT WORKS!!!');
    });


    const mousemove$ = merge(
      this.pointerEventListeners.pointerMove,
      this.mousemove
    ).pipe(
      tap(({ event }) => {
      
       /* if (currentResize) {
          event.preventDefault();
        }*/
      }),
      share()
    );

    
 }

 
}


interface PointerEventCoordinate {
  clientX: number;
  clientY: number;
  event: MouseEvent | TouchEvent;
}

class PointerEventListeners {
  public pointerDown: Observable<PointerEventCoordinate>;

  public pointerMove: Observable<PointerEventCoordinate>;

  public pointerUp: Observable<PointerEventCoordinate>;

  private static instance: PointerEventListeners; // tslint:disable-line

  public static getInstance(
    renderer: Renderer2,
    zone: NgZone
  ): PointerEventListeners {
    if (!PointerEventListeners.instance) {
      PointerEventListeners.instance = new PointerEventListeners(
        renderer,
        zone
      );
    }
    return PointerEventListeners.instance;
  }

constructor(renderer: Renderer2, zone: NgZone) {
  this.pointerDown = new Observable(
    (observer: Observer<PointerEventCoordinate>) => {
      let unsubscribeMouseDown: () => void;
      let unsubscribeTouchStart: () => void;
    //  console.log('IT WORKS!!!');
      zone.runOutsideAngular(() => {
        unsubscribeMouseDown = renderer.listen(
          'document',
          'mousedown',
          (event: MouseEvent) => {
            observer.next({
              clientX: event.clientX,
              clientY: event.clientY,
              event
            });
          }
        );

        unsubscribeTouchStart = renderer.listen(
          'document',
          'touchstart',
          (event: TouchEvent) => {
            observer.next({
              clientX: event.touches[0].clientX,
              clientY: event.touches[0].clientY,
              event
            });
          }
        );
      });

      return () => {
        unsubscribeMouseDown();
        unsubscribeTouchStart();
      };
    }
  ).pipe(share());

  this.pointerMove = new Observable(
    (observer: Observer<PointerEventCoordinate>) => {
      let unsubscribeMouseMove: () => void;
      let unsubscribeTouchMove: () => void;

      zone.runOutsideAngular(() => {
        unsubscribeMouseMove = renderer.listen(
          'document',
          'mousemove',
          (event: MouseEvent) => {
            observer.next({
              clientX: event.clientX,
              clientY: event.clientY,
              event
            });
          }
        );

        unsubscribeTouchMove = renderer.listen(
          'document',
          'touchmove',
          (event: TouchEvent) => {
            observer.next({
              clientX: event.targetTouches[0].clientX,
              clientY: event.targetTouches[0].clientY,
              event
            });
          }
        );
      });

      return () => {
        unsubscribeMouseMove();
        unsubscribeTouchMove();
      };
    }
  ).pipe(share());

  this.pointerUp = new Observable(
    (observer: Observer<PointerEventCoordinate>) => {
      let unsubscribeMouseUp: () => void;
      let unsubscribeTouchEnd: () => void;
      let unsubscribeTouchCancel: () => void;

      zone.runOutsideAngular(() => {
        unsubscribeMouseUp = renderer.listen(
          'document',
          'mouseup',
          (event: MouseEvent) => {
            observer.next({
              clientX: event.clientX,
              clientY: event.clientY,
              event
            });
          }
        );

        unsubscribeTouchEnd = renderer.listen(
          'document',
          'touchend',
          (event: TouchEvent) => {
            observer.next({
              clientX: event.changedTouches[0].clientX,
              clientY: event.changedTouches[0].clientY,
              event
            });
          }
        );

        unsubscribeTouchCancel = renderer.listen(
          'document',
          'touchcancel',
          (event: TouchEvent) => {
            observer.next({
              clientX: event.changedTouches[0].clientX,
              clientY: event.changedTouches[0].clientY,
              event
            });
          }
        );
      });

      return () => {
        unsubscribeMouseUp();
        unsubscribeTouchEnd();
        unsubscribeTouchCancel();
      };
    }
  ).pipe(share());
}
}