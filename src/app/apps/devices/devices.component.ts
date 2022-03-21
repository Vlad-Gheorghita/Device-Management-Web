import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Device } from 'src/app/libs/models/device';
import { DevicesService } from 'src/app/libs/services/device/devices.service';
import { DeviceDialogComponent } from './device-dialog/device-dialog.component';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {
  devices: Device[] = [];
  constructor(private dialog: MatDialog, private devicesService: DevicesService) {
  }

  ngOnInit() {
    this.getAllDevicesPromises();
  }

  getAllDevices() {
    this.devicesService.getDevices().subscribe((res: Device[]) => {
      this.devices = res;
    });
  }

  async getAllDevicesPromises() {
    const result = await this.devicesService.getDevices().toPromise();
    if (result) {
      this.devices = result;
    }
  }

  openDialog(device: Device) {
    const dialogRef = this.dialog.open(DeviceDialogComponent, {
      width: 'auto',
      data: device,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getAllDevicesPromises();
    });
  }

  openAddDialog(){
    const dialogRef = this.dialog.open(DeviceDialogComponent, {
      width: 'auto',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getAllDevicesPromises();
    });
  }
}
