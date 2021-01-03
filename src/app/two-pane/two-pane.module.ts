import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TwoPanePageRoutingModule } from './two-pane-routing.module';

import { TwoPanePage } from './two-pane.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TwoPanePageRoutingModule
  ],
  declarations: [TwoPanePage]
})
export class TwoPanePageModule {}
