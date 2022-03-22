import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { finalize } from 'rxjs/operators';
import { User } from 'src/app/libs/models/user';
import { UserService } from 'src/app/libs/services/user.service';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent {

  dialogContent: User;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: User,
    private dialogRef: MatDialogRef<UserDialogComponent>,
    private userService: UserService) {
        this.dialogContent = data;
  }
  
  onSubmit(form: NgForm) {
    if (form.invalid) return;
    this.saveUser();
  }

  saveUser() {
    this.userService.editUser(this.dialogContent).pipe(finalize(() => this.dialogRef.close())).subscribe(res => {
      console.log(res);
    });
  }

}
