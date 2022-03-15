import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: 'device-list',
        loadChildren: () => import('../apps/device-list/device-list.module').then((m) => m.DeviceListModule)
      },
      {
        path: 'device-management',
        loadChildren: () => import('../apps/device-management/device-management.module').then((m) => m.DeviceManagementModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
