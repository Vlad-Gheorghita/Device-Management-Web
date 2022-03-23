import { Component, Input, OnInit } from '@angular/core';
import { Device } from 'src/app/libs/models/device';

@Component({
  selector: 'app-device-card',
  templateUrl: './device-card.component.html',
  styleUrls: ['./device-card.component.scss'],
})
export class DeviceCardComponent {
  @Input() device: Device;

}
