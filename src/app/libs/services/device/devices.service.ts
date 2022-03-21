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

  deleteDeviceById(id: number) {
    return this.http.delete(this.baseUrl + '/device/delete-device/' + id)
  }

  addDevice(device: Device) {
    return this.http.post(this.baseUrl + '/device', device)
  }

  editDevice(device: Device) {
    return this.http.put(this.baseUrl + '/device', {
      id: device.id, name: device.name, manufacturer: device.manufacturer,
      type: 0, operatingSystem: device.operatingSystem, operatingSystemVersion: device.operatingSystemVersion, processor: device.processor, ram: device.ram
    })
  }

}