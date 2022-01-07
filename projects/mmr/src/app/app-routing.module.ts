import { RoutingComponent } from './routing/routing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IconSnackComponent } from './icon-snack/icon-snack.component';
import { ImporterThreeMethodsComponent } from './importer-three-methods/importer-three-methods.component';
import { DirectLetters } from './nestedLazy/direct-letters/direct-letters.component';
import { xi } from './nestedLazy/direct-letters/xi.component';
import { YDashComponent } from './nestedLazy/direct-letters/y-three-deep/y-dash.component';
import { zi } from './nestedLazy/direct-letters/y-three-deep/zi.component';

import { one } from './nestedLazy/o1/o1.component';
import { oneb } from './nestedLazy/o1/ob.component';
import { threeX } from './nestedLazy/two/three/three-x/three-x.component';

import { two } from './nestedLazy/two/two.component';
import { ParamsComponent } from './routing/params/params.component';
import { NavigateComponent } from './routing/navigate/navigate.component';
import { OutletComponent } from './routing/outlet.component';
import { FragmentsScrollComponent } from './routing/fragments-scroll/fragments-scroll.component';
import { NgxScrollComponent } from './routing/ngx-scroll/ngx-scroll.component';
import { ActivatedComponent } from './routing/activated/activated.component';
import { GuardsComponent } from './routing/guards/guards.component';
import { LoggedInSoActivateGuard } from './routing/guards/logged-in-so-activate.guard';
import { BlockExitByDeactivateRouteGuard } from './routing/guards/block-exit-by-deactivate-route.guard';

//MENU STATE VARIABLE can change the '' component loaded for testing

const routes: Routes = [

  {path: 'importer',  component: ImporterThreeMethodsComponent },
  {path:'icon-snack',component:IconSnackComponent},

  {path:'routing',component:RoutingComponent},
  {path:'routingXXXX',component:RoutingComponent},

  {path:'params',component:ParamsComponent},
  {path:'params/:myParam',component:ParamsComponent},
  {path:'navigate',component:NavigateComponent},
  {path:'fragments-scroll',component:FragmentsScrollComponent},
  {path:'ngx-scroll',component:NgxScrollComponent},
  {path:'activated',component:ActivatedComponent},
  {path:'guards',component:GuardsComponent,
          canDeactivate:[BlockExitByDeactivateRouteGuard],
          children: [ {
            path: 'outlet',
            component:OutletComponent,
            outlet:'guardOutlet',
            canActivate:[LoggedInSoActivateGuard]
                        }]},


  {path:'one',component:one},
  {path:'two',component:two},
  {path:'three-x',component:threeX},
  {path:'oneb',component:oneb},
  
  {path: 'direct-letters', component: DirectLetters, 
     children: [{path: 'xi', component: xi},
                {path: 'yDash', component: YDashComponent, 
                           children: [{path: 'zi', component: zi}]
                }]
  },
  { path: 'lazy-letters', loadChildren: () => import('./nestedLazy/lazy-letters/lazy-letters.module').then(m => m.LazyLettersModule) },

 

  {
    path: 'outlet',
    component:OutletComponent,
    outlet:'namedOutlet'
  },
  
   // { path: '**', component: RoutingComponent},
];
//{path: '**', redirectTo: 'home' }


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
