import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TwoPanePage } from './two-pane.page';

const routes: Routes = [
  {
    path: '',
    component: TwoPanePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TwoPanePageRoutingModule {}
