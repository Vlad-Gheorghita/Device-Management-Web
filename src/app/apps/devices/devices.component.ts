import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/libs/models/device';
import { DevicesService } from 'src/app/libs/services/devices.service';
import { DeviceDialogComponent } from './device-dialog/device-dialog.component';
import { MatDialog } from '@angular/material/dialog';

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

  openDialog(device?: Device) {
    const dialogRef = this.dialog.open(DeviceDialogComponent, {
      width: 'auto',
      data: device,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getAllDevicesPromises();
    });
  }

  checkAdmin() {
    let curentUser = JSON.parse(localStorage.getItem('user'));
    let res = curentUser.roles.find((r: any) => r.name === "Admin");

    if (res == undefined) return false;
    return true;
  }
}
