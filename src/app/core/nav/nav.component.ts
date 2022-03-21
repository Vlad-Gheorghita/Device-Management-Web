import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/libs/auth/auth.service';
import { User } from 'src/app/libs/models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  user: any;


  constructor(private router: Router, private authService: AuthService) {
    this.user = authService.userValue
  }

  ngOnInit(): void {
  }

  onClickLogOut() {
    this.authService.logout();
  }

}
