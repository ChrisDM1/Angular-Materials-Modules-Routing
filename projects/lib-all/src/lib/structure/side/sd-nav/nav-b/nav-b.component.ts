
import { MenuService } from '../menu.service';
import { Component, OnInit } from '@angular/core';
import { SizeStateServiceNav } from 'projects/lib-all/src/lib/styles/size-state/size-state-nav.service';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';


@Component({
  selector: 'nav-b',
  templateUrl: './nav-b.component.html',
  styleUrls: ['./nav-b.component.scss','../sd-nav.component.scss'],
  animations:[
    trigger('slideUp', [
        state('void', style({
            height: '*'
        })),
        transition('void => *', [
            animate(300, keyframes([
                style({opacity:0, offset: 0, height: 0, width: 0}),
                style({opacity:0.3, offset: 0.2, height: '*', width: '*'}),
                style({opacity:0.95, offset: 0.8, height: '*', width: '90%'}),
                style({opacity:1, offset: 1.0, height: 'auto', width:'auto'})
            ]))
        ]),
        transition('* => void',[
            animate(300, keyframes([
                style({opacity:1, offset: 0, height: 'auto', width:'auto'}),
                style({opacity:1, offset: 0.2, height: '*',width:'90%'}),
                style({opacity:0.5, offset: 0.8, height: '*', width: '*'}),
                style({opacity:0, offset: 1.0, height: 0,width:0})
            ]))
        ])
    ]),
    trigger('searchBar', [
        state('open', style({
            height: '100px'
        })),
        state('closed', style({
            height: '0px'
        }))
        ,
        transition('closed => open', [
            animate('1s')
        ]),
        transition('open => closed',[
            animate('1s')
        ])
    ])
],
})
export class NavBComponent implements OnInit {

  constructor(public ssh:SizeStateServiceNav,public ms: MenuService) { }

  ngOnInit(): void {
   // setTimeout(() => {this.ms.sNavB_Toggle();}, 500);
    //this.ms.sNavB_Toggle();
    }

  

}
