import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/libs/auth/auth.service';
import { UserLocation } from 'src/app/libs/models/user-location';
import { UserService } from 'src/app/libs/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  email: string;
  password: string;

  constructor(private router: Router, private authService: AuthService, private userService: UserService) { }

  ngOnInit() {
    this.email = "";
    this.password = "";
  }

  onRegister() {
    this.router.navigateByUrl("/auth/register");
  }

  login(form: NgForm) {
    if (form.invalid) return;
    try {
      this.authService.login(this.email, this.password).subscribe((res: any) => {
        if (res) {
          this.router.navigateByUrl('/app/devices');
          this.getLocation(res.id);
        }
        else {
          this.router.navigateByUrl('/aut/login');
        }
      });
    } catch (e) {
      console.log(e);
    }
  }

  updateUserLocation(location: UserLocation, userId: number) {
    this.userService.updateLocation(location, userId).subscribe();
  }

  getLocation(userId: number): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        let location = { longitude: longitude.toString(), latitude: latitude.toString() };
        this.updateUserLocation(location, userId)
      });
    } else {
      console.log("No support for geolocation")
    }
  }
}
