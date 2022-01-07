
import {Component, ViewChild, OnInit, ComponentFactoryResolver, ApplicationRef, Injector, OnDestroy,
  AfterViewInit,
  TemplateRef,
  ViewContainerRef,
  ElementRef } from '@angular/core';
import {
  
} from '@angular/core';
import {CdkPortal,DomPortal} from '@angular/cdk/portal';

@Component({
  selector: 'window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit, OnDestroy {

  // STEP 1: get a reference to the portal
  @ViewChild(CdkPortal) portal: CdkPortal;
  //@ViewChild('domPortalContent') portal: ElementRef<HTMLElement>;

  // STEP 2: save a reference to the window so we can close it
  private externalWindow= window.open('', '', 'width=600,height=400,left=200,top=200');
 

  // STEP 3: Inject all the required dependencies for a PortalHost
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector){}


  ngOnInit(){
    // STEP 4: create an external window
    //this.externalWindow = window.open('', '', 'width=600,height=400,left=200,top=200');
    //const externalWindow = window.open('', '', 'width=600,height=400,left=200,top=200');
    window.open('', '', 'width=600,height=400,left=200,top=200');
    // STEP 5: create a PortalHost with the body of the new window document    
    if (this.externalWindow) {
      const host = new DomPortal(
        this.externalWindow.document.body
        );
        host.attach(this.portal);
  }
   

    // STEP 6: Attach the portal
    
  }

  ngOnDestroy(){
    // STEP 7: close the window when this component destroyed
    if (this.externalWindow) {
    this.externalWindow.close();
    }
  }
}