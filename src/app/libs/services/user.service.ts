import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { UserLocation } from '../models/user-location';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = environment.API_BASEURL;

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.baseUrl + '/user');
  }

  editUser(user: User) {
    return this.http.put(this.baseUrl + '/user', {
      id: user.id,
      name: user.name,
      email: user.email
    })
  }

  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + '/user/' + id);
  }

  updateLocation(location: UserLocation, userId: number) {
    return this.http.put(this.baseUrl + '/User/update-user-location', {
      id: userId, locationUpdateRequest: {
        latitude: location.latitude,
        longitude: location.longitude
      }
    })
  }
}
