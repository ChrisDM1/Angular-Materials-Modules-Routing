import { LoginGuardService } from './login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'guards',
  templateUrl: './guards.component.html',
  styleUrls: ['./guards.component.scss']
})
export class GuardsComponent implements OnInit {

  constructor(public lgn:LoginGuardService) { }

  ngOnInit(): void {
  }

  public canI_exitComponent =false;

}
