import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: 'devices',
        loadChildren: () => import('../apps/devices/device-page/device-page.module').then((m) => m.DevicePageModule)
      },
      {
        path: 'device/:{id}',
        loadChildren: () => import('../apps/devices/details-page/details-page.module').then((m) => m.DetailsPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
