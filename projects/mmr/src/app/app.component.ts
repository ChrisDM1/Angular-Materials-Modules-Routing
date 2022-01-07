import { PageService } from './services/custom/page.service';

import { SizeStateServiceNav } from 'projects/lib-all/src/lib/styles/size-state/size-state-nav.service'; 
import {CustomSizeStateService } from './services/custom/custom-size-state.service'; 
import { Component, OnInit,HostListener, ViewChild, ElementRef,
  Inject,AfterViewInit } from '@angular/core'; 
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor( public ssh:SizeStateServiceNav,public cssh:CustomSizeStateService, public ps:PageService,
    private activeRoute: ActivatedRoute ){ 
      
    }
    private subscription!: Subscription;
    
  

  index=false; 
  declaredSection=false;

    ngOnInit(){ 
      this.resizeX();
      this.customInitialisations();


          this.subscription =this.activeRoute.queryParams.subscribe(
            //queryParam is an Object
            qP => {
                  qP['declaredSection']=='true'?this.declaredSection=true:this.declaredSection=false;
                  qP['index']=='true'?this.index=true:this.index=false;
          }        
        );
    } 
    

    customInitialisations(){
      this.ps.initData();
    }


    @HostListener('window:resize', ['$event']) async resizeX(){ 
      console.log('****SCREEN RESIZED ****'); 
      await this.ssh.screenResized(); 
      this.cssh.screenResized(); } 


}

