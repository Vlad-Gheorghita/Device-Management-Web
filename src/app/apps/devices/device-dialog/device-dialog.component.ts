import { Component, Inject, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { finalize } from 'rxjs/operators';
import { Device } from 'src/app/libs/models/device';
import { DevicesService } from 'src/app/libs/services/devices.service';

@Component({
  selector: 'app-device-dialog',
  templateUrl: './device-dialog.component.html',
  styleUrls: ['./device-dialog.component.scss']
})
export class DeviceDialogComponent {
  dialogContent: Device;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Device,
    private dialogRef: MatDialogRef<DeviceDialogComponent>,
    private devicesService: DevicesService
  ) {
    this.dialogContent = data;
    if (this.data) {
      this.dialogContent = data;
    }
    else {
      this.dialogContent = new Device();
    }
  }

  onSubmit(form: NgForm){
    if (form.invalid) return;

    if (this.data) this.onEdit();
    else this.onAdd();
  }

  onEdit(){
    this.devicesService.editDevice(this.dialogContent).subscribe();
    this.dialogRef.close();
  }

  onAdd(){
    this.devicesService.addDevice(this.dialogContent).subscribe();
    this.dialogRef.close();
  }

  onNoClick() {
    this.dialogRef.close();
  }

  onDelete() {
    this.devicesService.deleteDeviceById(this.dialogContent.id).pipe(finalize(() => this.dialogRef.close())).subscribe();
  }
}
