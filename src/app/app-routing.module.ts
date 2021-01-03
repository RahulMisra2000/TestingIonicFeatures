import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'places', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthPageModule) },
  {
    path: 'places',
    loadChildren: () => import('./places/places.module').then(m => m.PlacesPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'bookings',
    loadChildren: () => import('./bookings/bookings.module').then(m => m.BookingsPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'testing-menu',
    loadChildren: () => import('./testing-menu/testing-menu.module').then( m => m.TestingMenuPageModule)
  },
  {
    path: 'two-pane',
    loadChildren: () => import('./two-pane/two-pane.module').then( m => m.TwoPanePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
