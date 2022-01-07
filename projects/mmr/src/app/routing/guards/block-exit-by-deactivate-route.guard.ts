import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GuardsComponent } from './guards.component';


interface CanDeactivate<T> {
  canDeactivate(component: T, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
}



@Injectable({
  providedIn: 'root'
})
export class BlockExitByDeactivateRouteGuard implements CanDeactivate<GuardsComponent> {
 
  canDeactivate(guardComponent: GuardsComponent, currentRoute: ActivatedRouteSnapshot, currentState:       RouterStateSnapshot, nextState: RouterStateSnapshot) {

    if(!guardComponent.canI_exitComponent){alert("Conditions not met to Exit this component");}
    return guardComponent.canI_exitComponent;
  }
  
}
