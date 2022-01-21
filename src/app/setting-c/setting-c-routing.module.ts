import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingCPage } from './setting-c.page';

const routes: Routes = [
  {
    path: '',
    component: SettingCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingCPageRoutingModule {}
