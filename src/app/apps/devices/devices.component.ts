import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Device } from 'src/app/libs/models/Device';
import { DeviceDialogComponent } from './device-dialog/device-dialog.component';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  device: Device = {
    name: "Legion 5",
    manufacturer: "LG",
    type: "Notebook",
    operatingSystem: "Windows 11",
    operatingSystemVersion: "21H2",
    processor: "AMD Ryzen 7 5800H",
    ram: 16
  };

  animal: string;
  name: string;

  constructor() {}
  ngOnInit(): void {
  }

  

}
