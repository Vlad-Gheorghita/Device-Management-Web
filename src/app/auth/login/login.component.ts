import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/libs/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = "";
  password = "";

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onRegister() {
    this.router.navigateByUrl("/auth/register");
  }

  login(form: NgForm) {
    if (form.invalid) return;
    try {
      this.authService.login(this.email, this.password).subscribe((res: any)=>{
        if(res){
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
