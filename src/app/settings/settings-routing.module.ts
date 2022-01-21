import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsPage } from './settings.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsPage,
    children: [
      {
        path: 'setting-a',
        loadChildren: () => import('../setting-a/setting-a.module').then(m => m.SettingAPageModule)
      },
      {
        path: 'setting-b',
        loadChildren: () => import('../setting-b/setting-b.module').then(m => m.SettingBPageModule)
      },
      {
        path: 'setting-c',
        loadChildren: () => import('../setting-c/setting-c.module').then(m => m.SettingCPageModule)
      },
      {
        path: '',
        redirectTo: './settings/setting-a',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: './settings/setting-a',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class SettingsPageRoutingModule { }
