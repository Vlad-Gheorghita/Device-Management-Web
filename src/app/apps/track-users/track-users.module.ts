import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackUsersRoutingModule } from './track-users-routing.module';
import { TrackUsersComponent } from './track-users.component';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    TrackUsersComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    TrackUsersRoutingModule
  ]
})
export class TrackUsersModule { }
