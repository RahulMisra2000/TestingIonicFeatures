import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestingMenuPage } from './testing-menu.page';

const routes: Routes = [
  {
    path: '',
    component: TestingMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestingMenuPageRoutingModule {}
