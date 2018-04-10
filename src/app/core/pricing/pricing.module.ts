import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexPricingComponent } from './index-pricing/index-pricing.component';

import { RouterModule } from '@angular/router';
import { routes } from './pricing.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IndexPricingComponent]
})
export class PricingModule { }
