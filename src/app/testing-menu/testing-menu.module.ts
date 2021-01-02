import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestingMenuPageRoutingModule } from './testing-menu-routing.module';

import { TestingMenuPage } from './testing-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestingMenuPageRoutingModule
  ],
  declarations: [TestingMenuPage]
})
export class TestingMenuPageModule {}
