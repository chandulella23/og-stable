import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexWhyComponent } from './index-why/index-why.component';

import { RouterModule } from '@angular/router';
import { routes } from './why-interactive.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IndexWhyComponent]
})
export class WhyInteractiveModule { }
