import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginGuardService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInSoActivateGuard implements CanActivate {

  constructor(private loginGuardService: LoginGuardService) { }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     let x=this.loginGuardService.returnLoginStatus();
    
    
     if(!x){alert("Please Login");}
      return this.loginGuardService.returnLoginStatus();

  }
  
}
