import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService {

  constructor() { }

  private loggedIn=false

  returnLoginStatus(){
    return this.loggedIn;
  }

  toggleLoginStatus(){
    this.loggedIn=!this.loggedIn;
  }

}
