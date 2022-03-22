import { Component, Inject, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { finalize } from 'rxjs/operators';
import { Device } from 'src/app/libs/models/device';
import { User } from 'src/app/libs/models/user';
import { DevicesService } from 'src/app/libs/services/devices.service';

@Component({
  selector: 'app-device-dialog',
  templateUrl: './device-dialog.component.html',
  styleUrls: ['./device-dialog.component.scss']
})
export class DeviceDialogComponent implements OnInit {
  dialogContent: Device;
  currentUser: User;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Device,
    private dialogRef: MatDialogRef<DeviceDialogComponent>,
    private devicesService: DevicesService
  ) { }
  
  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    if (this.data) {
      this.dialogContent = this.data;
    }
    else {
      this.dialogContent = new Device();
    }
  }

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    if (this.data) this.onEdit();
    else this.onAdd();
  }

  onEdit() {
    this.devicesService.editDevice(this.dialogContent).subscribe();
    this.dialogRef.close();
  }

  onAdd() {
    this.devicesService.addDevice(this.dialogContent).subscribe();
    this.dialogRef.close();
  }

  checkAdmin() {
    let res = this.currentUser.roles.find((r: any) => r.name === "Admin");

    if (res == undefined) return false;
    return true;
  }

  onDelete() {
    this.devicesService.deleteDeviceById(this.dialogContent.id).pipe(finalize(() => this.dialogRef.close())).subscribe();
  }

  unassignUser() {
    this.devicesService.unassignUserFromDevice(this.dialogContent.id).pipe(finalize(() => this.dialogRef.close())).subscribe(res => {
      console.log(res);
    });
  }

  assignUser() {
    this.devicesService.assignUserToDevice(this.currentUser.id, this.dialogContent.id).pipe(finalize(() => this.dialogRef.close())).subscribe(res => {
      console.log(res);
    })
  }

  checkUnassignAction() {
    if (this.dialogContent.user?.id !== this.currentUser.id || this.dialogContent.user === null)
      return true;
    return false;
  }

  checkAssignAction() {
    if (this.dialogContent.user !== null) return true;
    return false;
  }
}
