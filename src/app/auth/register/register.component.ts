import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/libs/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username: string;
  email: string;
  password: string;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onRegister() {

  }

  register(form: NgForm) {
    if (form.invalid) return;
    try {
      this.authService.register(this.username, this.email, this.password).subscribe((res: any) => {
        if (res) {
          this.router.navigateByUrl('/app/devices')
        }
        else {
          this.router.navigateByUrl('/aut/login')
        }
      });
    } catch (e) {
      console.log(e);
    } finally {
      console.log("test");
    }
  }
}
