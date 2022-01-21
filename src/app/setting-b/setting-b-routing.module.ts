import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingBPage } from './setting-b.page';

const routes: Routes = [
  {
    path: '',
    component: SettingBPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingBPageRoutingModule {}
