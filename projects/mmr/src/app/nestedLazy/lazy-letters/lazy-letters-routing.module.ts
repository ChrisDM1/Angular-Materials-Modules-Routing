import { bDash } from './b-dash/b-dash.component';
import { NgModule } from '@angular/core';
import { Routes,
  RouterModule }        from '@angular/router';

import { a } from './a.component';
import { LazyLettersDash } from './lazy-letters-dash.component';

  const routes: Routes= [
    {
      path: '', component: LazyLettersDash, children: [
        { path: 'a',    component: a },
        { path: 'b-dash-lazy-load-children',  loadChildren: () => import('./b-dash/b-dash.module').then(m => m.bDashModule)},
       
          
         
      /*  { path: 'balance', loadChildren: () => import(`./balance/balance.module`).then(m => m.BalanceModule) },
        {
          path: '', redirectTo: 'apply', pathMatch: 'full'
        },
        { path: '**', component: Page404leavesComponent }*/
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class LazyLettersRoutingModule { }
