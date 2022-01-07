import { cExported } from './../c-exported.component';
import { biii } from './biii.component';
import { bii } from './bii.component';
import { bi } from './bi.component';
import { bDash } from './b-dash.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes,
  RouterModule }        from '@angular/router';
  import { a } from '../a.component';



const routes: Routes= [
  {
    path: '', component: bDash, children: [
      {
        path: 'bi', component: bi
      },
      {
        path: 'bii', component: bii
      },  {
        path: 'biii', component: biii
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BDashRoutingModule { }
