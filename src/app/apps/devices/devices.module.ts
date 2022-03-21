import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesRoutingModule } from './devices-routing.module';
import { DevicesComponent } from './devices.component';
import { DeviceCardComponent } from './device-card/device-card.component';
import { SharedModule } from 'src/shared/shared.module';
import { DeviceDialogComponent } from './device-dialog/device-dialog.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DevicesComponent,
    DeviceCardComponent,
    DeviceDialogComponent
  ],
  imports: [
    CommonModule,
    DevicesRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class DevicesModule { }
