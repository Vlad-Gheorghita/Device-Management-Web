import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../libs/guards/admin.guard';
import { CoreComponent } from './core.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: 'devices',
        loadChildren: () => import('../apps/devices/devices.module').then((m) => m.DevicesModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('../apps/admin/admin.module').then((m) => m.AdminModule),
        canActivate: [AdminGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
