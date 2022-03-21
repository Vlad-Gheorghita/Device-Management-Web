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

  // device: Device = {
  //   name: "Legion 5",
  //   manufacturer: "LG",
  //   type: "Notebook",
  //   operatingSystem: "Windows 11",
  //   operatingSystemVersion: "21H2",
  //   processor: "AMD Ryzen 7 5800H",
  //   ram: 16
  // };

  devices: Device[] = [];

  // animal: string;
  // name: string;

  constructor(private devicesService: DevicesService) {
  }

  getAllDevices(){
    this.devicesService.getDevices().subscribe((res: Device[])=>{
      this.devices = res;
    });
  }

  async getAllDevicesPromises(){
    const result = await this.devicesService.getDevices().toPromise();
    if(result){
      this.devices = result;
    }
  }

  ngOnInit() {
    this.getAllDevicesPromises();
  }

  

}
