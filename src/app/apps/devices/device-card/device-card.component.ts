import { Component, Input, OnInit } from '@angular/core';
import { Device } from 'src/app/libs/models/device';

@Component({
  selector: 'app-device-card',
  templateUrl: './device-card.component.html',
  styleUrls: ['./device-card.component.scss'],
})
export class DeviceCardComponent implements OnInit {
  @Input() device: Device;

  ngOnInit(): void {
    if (this.device.type == '0')
      this.device.type = 'Phone';
    else
      this.device.type = 'Tablet';
  }
}
