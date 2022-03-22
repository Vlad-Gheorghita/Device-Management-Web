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
  users: User[] = [];
  displayedColumns: string[] = [];

  constructor(private userService: UserService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.displayedColumns = ['position', 'name', 'email', 'roles', 'actions'];
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

  getAllUsersPromises() {
    this.userService.getUsers()
      .subscribe((users: any) => {
        this.users = users;
      });
  }

  onDelete(id: number) {
    this.userService.deleteUser(id)
      .pipe(finalize(() => this.getAllUsersPromises()))
      .subscribe();
  }
}
