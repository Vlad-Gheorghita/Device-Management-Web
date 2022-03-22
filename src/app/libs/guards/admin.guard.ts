import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth/auth.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService, private toastr: ToastrService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = this.authService.userValue;

    if (this.checkAdmin(user))
      return true;

    this.toastr.warning("You cannot access this page", "Unauthorized!")
    this.router.navigate(['app/devices'], { queryParams: { returnUrl: state.url } });
    return false;
  }

  checkAdmin(user: User) {
    let isAdmin = false;
    let res = user.roles.find(r => r.name === "Admin")
    if (!(res == undefined)) isAdmin = true;
    return isAdmin;
  }
}
