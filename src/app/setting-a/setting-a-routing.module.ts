import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingAPage } from './setting-a.page';

const routes: Routes = [
  {
    path: '',
    component: SettingAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingAPageRoutingModule {}
