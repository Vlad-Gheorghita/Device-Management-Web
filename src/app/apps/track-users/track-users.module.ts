import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackUsersRoutingModule } from './track-users-routing.module';
import { TrackUsersComponent } from './track-users.component';
import { MapComponent } from './map/map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { SharedModule } from 'src/shared/shared.module';


@NgModule({
  declarations: [
    TrackUsersComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    TrackUsersRoutingModule,
    GoogleMapsModule,
    SharedModule
  ]

})
export class TrackUsersModule { }
