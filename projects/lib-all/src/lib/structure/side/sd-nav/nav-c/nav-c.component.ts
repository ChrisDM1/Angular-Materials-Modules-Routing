import { Component, OnInit } from '@angular/core';
import { SizeStateServiceNav } from 'projects/lib-all/src/lib/styles/size-state/size-state-nav.service';


@Component({
  selector: 'nav-c',
  templateUrl: './nav-c.component.html',
  styleUrls: ['./nav-c.component.scss','../sd-nav.component.scss']
})
export class NavCComponent implements OnInit {

  constructor(public ssh:SizeStateServiceNav) { }

  ngOnInit(): void {
  }

}
