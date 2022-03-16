import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/libs/models/Device';

@Component({
  selector: 'app-device-card',
  templateUrl: './device-card.component.html',
  styleUrls: ['./device-card.component.scss']
})
export class DeviceCardComponent implements OnInit {

  device: Device = {name: "Laptop", manufacturer: "LG"};

  constructor() { }

  ngOnInit(): void {
  }

}
