import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceListRoutingModule } from './device-list-routing.module';
import { DeviceListComponent } from './device-list.component';
import { DeviceCardComponent } from './device-card/device-card.component';


@NgModule({
  declarations: [
    DeviceListComponent,
    DeviceCardComponent
  ],
  imports: [
    CommonModule,
    DeviceListRoutingModule
  ]
})
export class DeviceListModule { }
