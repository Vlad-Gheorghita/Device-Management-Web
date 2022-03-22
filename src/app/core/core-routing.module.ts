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
        path: 'users',
        loadChildren: () => import('../apps/admin/admin.module').then((m) => m.AdminModule),
        canActivate: [AdminGuard]
      },
      {
        path: 'track-users',
        loadChildren: () => import('../apps/track-users/track-users.module').then((m) => m.TrackUsersModule),
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
