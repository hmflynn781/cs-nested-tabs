import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingBPageRoutingModule } from './setting-b-routing.module';

import { SettingBPage } from './setting-b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingBPageRoutingModule
  ],
  declarations: [SettingBPage]
})
export class SettingBPageModule {}
