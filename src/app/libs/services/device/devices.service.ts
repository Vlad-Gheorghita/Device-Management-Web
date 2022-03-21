import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Device } from '../../models/device'

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  private baseUrl = environment.API_BASEURL;

  constructor(private http: HttpClient) { }


  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(this.baseUrl + '/device');
  }

}
