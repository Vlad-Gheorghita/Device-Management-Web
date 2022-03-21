import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { User } from 'src/app/libs/models/user';
import { UserLocation } from 'src/app/libs/models/user-location';
import { UserService } from 'src/app/libs/services/user.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  zoom = 12;
  markers: any[] = [];
  startDate: Date;
  endDate: Date;
  center: google.maps.LatLngLiteral
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  }
  locations: any = [];
  users: any = [];
  user: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    });
    // this.getAllLocations();
    this.getAllUsers();
  }

  // async getAllLocations() {
  //   const result = await this.userLocationService.getAllLocations().toPromise();
  //   if (result) this.locations = result;

  //   this.locations.forEach((location: any) => {
  //     this.markers.push({
  //       position: {
  //         lat: parseFloat(location.latitude),
  //         lng: parseFloat(location.longitude),
  //       },
  //       label: {
  //         color: 'red',
  //         text: 'Marker label ',
  //       },
  //       title: 'Marker title ',
  //       options: { animation: google.maps.Animation.BOUNCE },
  //     })
  //   });
  // }

  showLocations(locations: any) {
    locations.forEach((location: any) => {
      this.markers.push({
        position: {
          lat: parseFloat(location.latitude),
          lng: parseFloat(location.longitude),
        },
        label: {
          color: 'red',
          text: 'Marker label ',
        },
        title: 'Marker title ',
        options: { animation: google.maps.Animation.BOUNCE },
      })
    });
  }

  getAllUsers() {
    this.userService.getUsers().pipe(finalize(() => this.getLocations(this.users))).subscribe((res) => {
      this.users = res;
    })
  }

  getLocations(users: User[]) {
    let locations: UserLocation[] = [];
    users.forEach(user => {
      if (user.location) {
        locations.push(user.location);
      }
    })

    if (locations.length > 0) this.showLocations(locations);

    let location = {
      longitude: '23.591423',
      latitude: '46.770439',
    }
    this.markers.push({
      position: {
        lat: parseFloat(location.latitude),
        lng: parseFloat(location.longitude),
      },
      label: {
        color: 'red',
        text: 'Marker label ',
      },
      title: 'Marker title ',
      options: { animation: google.maps.Animation.BOUNCE },
    })
  }

  zoomIn() {
    if (this.zoom < (this.options.maxZoom ? this.options.maxZoom : this.zoom)) this.zoom++
  }

  zoomOut() {
    if (this.zoom > (this.options.minZoom ? this.options.minZoom : this.zoom)) this.zoom--
  }
}
