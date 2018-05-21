import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarketingListComponent } from './marketing-list/marketing-list.component';

const routes: Routes = [
  {
    path: '',
    component: MarketingListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketingRoutingModule { }
