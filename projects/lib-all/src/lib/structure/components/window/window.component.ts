import { DebugToolComponent } from './../../../debug/debug-tool/debug-tool.component';
import {ComponentPortal, DomPortal, Portal, TemplatePortal,CdkPortal, DomPortalOutlet} from '@angular/cdk/portal';
import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ElementRef,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector
} from '@angular/core';
import { BnrOneComponent } from '../banner/bnr-one/bnr-one.component';


/**
 * @title Portal overview
 */
 @Component({
  selector: 'window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements AfterViewInit {
  @ViewChild('templatePortalContent', { static: false }) templatePortalContent!: TemplateRef<unknown>;
  @ViewChild('domPortalContent', { static: false }) domPortalContent!: ElementRef<HTMLElement>;



  selectedPortal!: Portal<any>;
 // componentPortal!: ComponentPortal<BnrOneComponent>;
  componentPortal!: ComponentPortal<DebugToolComponent>;

  templatePortal!: TemplatePortal<any>;
  domPortal!: DomPortal<any>;


  constructor(private _viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector) { }

  ngAfterViewInit() {
    //this.componentPortal = new ComponentPortal(BnrOneComponent);
    this.componentPortal = new ComponentPortal(DebugToolComponent);

    this.templatePortal = new TemplatePortal(
      this.templatePortalContent,
      this._viewContainerRef
    );
 
      this.openWindow();
    
  }

  ngOnInit(){
    //this.domPortal = new DomPortalOutlet(this.domPortalContent);
    // this.externalWindow = window.open('', '', 'width=600,height=400,left=200,top=200');
   

  
  
}

//@ViewChild('cdkPortal', { static: false} ) portal!: CdkPortal;
private externalWindow:any = null;
openWindow(){
  this.externalWindow = window.open('', '', 'channelmode=yes');
  const host = new DomPortalOutlet(
    this.externalWindow.document.body,
    this.componentFactoryResolver,
    this.applicationRef,
    this.injector
    );
      
     host.attach( this.componentPortal);
}

ngOnDestroy(){
  // STEP 7: close the window when this component destroyed
  this.externalWindow.close()
}


}

/************************************************************** */


@Component({
  selector: 'component-portal-example',
  template: '<button (click)="alert()">Hello, this is a component portal!!</button>'
})
export class ComponentPortalExample { 
  alert(){
    alert("hello");
  }
}
