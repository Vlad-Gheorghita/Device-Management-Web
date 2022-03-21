import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = environment.API_BASEURL;

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(this.baseUrl + '/user');
  }
}
