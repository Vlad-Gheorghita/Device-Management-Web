import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { User } from 'src/app/libs/models/user';
import { UserService } from 'src/app/libs/services/user.service';
import { UserDialogComponent } from './user-dialog/user-dialog.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  users: any = [];

  displayedColumns: string[] = ['position', 'name', 'email', 'roles', 'actions'];

  constructor(private userService: UserService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllUsersPromises();
  }

  openDialog(user: User) {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: 'auto',
      data: user,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getAllUsersPromises();
    });
  }

  async getAllUsersPromises() {
    const result = await this.userService.getUsers().toPromise();
    if (result) {
      this.users = result;
    }
  }

  onDelete(id: number) {
    this.userService.deleteUser(id).pipe(finalize(() => this.getAllUsersPromises())).subscribe(res => {
      console.log(res);
    });
  }
}
