import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {

  constructor(private authSevice: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user = this.authSevice.userValue;
        const isLoggedIn = user.email;
        const isApiUrl = request.url.startsWith(environment.API_BASEURL);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${user.token}`
                }
            });
        }
        return next.handle(request);
  }
}
