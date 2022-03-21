import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/libs/auth/auth.service';
import { Role } from 'src/app/libs/models/role';
import { User } from 'src/app/libs/models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  user: User;


  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.userValue;
  }

  onClickLogOut() {
    this.authService.logout();
  }

  checkAdmin(user: User) {

    let res = user.roles.find(r => r.name === "Admin")
    if(res == undefined) return false;
    return true;
    
  }

  goToTrackUsers(){
    this.router.navigateByUrl("/app/track-users")
  }
}
