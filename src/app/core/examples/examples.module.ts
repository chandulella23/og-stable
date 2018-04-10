import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexExamplesComponent } from './index-examples/index-examples.component';

import { RouterModule } from '@angular/router';
import { routes } from './examples.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IndexExamplesComponent]
})
export class ExamplesModule { }

