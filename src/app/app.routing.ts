import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  
  
  { path: '', loadChildren: './core/core.module#CoreModule' },
];