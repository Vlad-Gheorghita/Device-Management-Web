import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.API_BASEURL;
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(private http: HttpClient, private router: Router) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user') || '{}'));
    this.user = this.userSubject.asObservable();
  }

  get userValue(): any {
    return this.userSubject.value;
  }

  login(email: string, password: string) {
    return this.http.post(this.baseUrl + '/Account/login', { email: email, password: password }).pipe(map((user: any) => {
      localStorage.setItem('user', JSON.stringify(user));
      this.userSubject.next(user);
      return user;
    }));
  }


  logout() {
    localStorage.removeItem('user');
    this.userSubject.next({});
    this.router.navigate(['auth/login']);
  }

  register(name: string, email: string, password: string) {
    return this.http.post(this.baseUrl + '/account/register',
      { name: name, email: email, password: password });
  }
}
