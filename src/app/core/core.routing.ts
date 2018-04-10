import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: 'examples', loadChildren: './examples/examples.module#ExamplesModule' },
    { path: 'features', loadChildren: './features/features.module#FeaturesModule' },
    { path: '', loadChildren: './home/home.module#HomeModule' },
    { path: 'pricing', loadChildren: './pricing/pricing.module#PricingModule' },
    { path: 'why-interactive', loadChildren: './why-interactive/why-interactive.module#WhyInteractiveModule' }

];