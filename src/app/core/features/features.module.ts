import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexFeaturesComponent } from './index-features/index-features.component';

import { RouterModule } from '@angular/router';
import { routes } from './features.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IndexFeaturesComponent]
})
export class FeaturesModule { }
