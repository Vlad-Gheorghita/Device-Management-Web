import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicePageRoutingModule } from './device-page-routing.module';
import { DevicePageComponent } from './device-page.component';
import { DeviceItemComponent } from './device-item/device-item.component';


@NgModule({
  declarations: [
    DevicePageComponent,
    DeviceItemComponent
  ],
  imports: [
    CommonModule,
    DevicePageRoutingModule
  ]
})
export class DevicePageModule { }
