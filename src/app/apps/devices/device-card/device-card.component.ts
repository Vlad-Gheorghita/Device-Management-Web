import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Device } from 'src/app/libs/models/device';
import { DeviceDialogComponent } from '../device-dialog/device-dialog.component';

@Component({
  selector: 'app-device-card',
  templateUrl: './device-card.component.html',
  styleUrls: ['./device-card.component.scss'],
})
export class DeviceCardComponent implements OnInit {

  @Input() device: Device;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    if (this.device.type == '0')
      this.device.type = 'Phone';
    else
      this.device.type = 'Tablet';
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DeviceDialogComponent, {
      width: '250px',
      data: this.device,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}
