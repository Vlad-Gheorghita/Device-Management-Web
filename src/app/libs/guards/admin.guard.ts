import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService, private toastr: ToastrService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = this.authService.userValue;

    if (this.checkAdmin(user.roles))
      return true;

    this.toastr.warning("You cannot access this page", "Unauthorized!")
    this.router.navigate(['app/devices'], { queryParams: { returnUrl: state.url } });
    return false;
  }

  checkAdmin(userRoles: any) {
    let isAdmin = false;
    for (var role in userRoles) {
      if (role === "Admin")
        isAdmin = true;
    }
    return isAdmin;
  }
}
