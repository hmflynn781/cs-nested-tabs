import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SettingAPage } from './setting-a.page';

import { SettingAPageRoutingModule } from './setting-a-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SettingAPageRoutingModule
  ],
  declarations: [SettingAPage]
})
export class SettingAPageModule {}
