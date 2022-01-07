import { SizeStateServiceNav } from 'projects/lib-all/src/lib/styles/size-state/size-state-nav.service';
import { MenuService } from './../menu.service';

import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'nav-a',
  templateUrl: './nav-a.component.html',
  styleUrls: ['./nav-a.component.scss','../sd-nav.component.scss']
})
export class NavAComponent implements OnInit {

  constructor(public ms:MenuService,public ssh:SizeStateServiceNav,
    private location: Location) { }

  ngOnInit(): void {
  }
  
  locationBack(){
    this.location.back() 
  }
 
}
