import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingCPageRoutingModule } from './setting-c-routing.module';

import { SettingCPage } from './setting-c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingCPageRoutingModule
  ],
  declarations: [SettingCPage]
})
export class SettingCPageModule {}
