import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Device } from '../models/device'

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  private baseUrl = environment.API_BASEURL;

  constructor(private http: HttpClient) { }


  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(this.baseUrl + '/device/devices');
  }

  deleteDeviceById(id: number) {
    return this.http.delete(this.baseUrl + '/device/delete-device/' + id);
  }

  addDevice(device: Device) {
    return this.http.post(this.baseUrl + '/device/add', device);
  }

  editDevice(device: Device) {
    return this.http.put(this.baseUrl + '/device/edit', {
      id: device.id, name: device.name, manufacturer: device.manufacturer,
      type: 0, operatingSystem: device.operatingSystem, operatingSystemVersion: device.operatingSystemVersion, processor: device.processor, ram: device.ram
    });
  }

  assignUserToDevice(userId: number, deviceId: number) {
    return this.http.put(this.baseUrl + '/device/assign-device/' + deviceId + '/' + userId, {});
  }

  unassignUserFromDevice(deviceId: number) {
    return this.http.put(this.baseUrl + '/device/unassign-device/' + deviceId, {});
  }
}
