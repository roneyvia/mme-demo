import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketingRoutingModule } from './marketing-routing.module';
import { MarketingListComponent } from './marketing-list/marketing-list.component';

@NgModule({
  imports: [
    CommonModule,
    MarketingRoutingModule
  ],
  declarations: [MarketingListComponent]
})
export class MarketingModule { }
