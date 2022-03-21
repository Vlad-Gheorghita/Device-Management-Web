import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackUsersComponent } from './track-users.component';

const routes: Routes = [
  {
    path: '',
    component: TrackUsersComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackUsersRoutingModule { }
