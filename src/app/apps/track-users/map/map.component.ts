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
  zoom:number;
  markers: any[] = [];
  startDate: Date;
  endDate: Date;
  center: google.maps.LatLngLiteral
  options: google.maps.MapOptions;
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.init();
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    });
    this.getAllUsers();
  }

  init(){
    this.zoom = 12;
    this.options = {
      mapTypeId: 'hybrid',
      zoomControl: false,
      scrollwheel: false,
      disableDoubleClickZoom: true,
      maxZoom: 15,
      minZoom: 8
    }
  }

  showLocations(locations: any) {
    locations.forEach((location: any) => {
      this.markers.push({
        position: {
          lat: parseFloat(location.latitude),
          lng: parseFloat(location.longitude),
        },
        label: {
          color: 'black',
          text: 'Marker label ',
        },
        title: 'Marker title ',
        options: { animation: google.maps.Animation.BOUNCE },
      })
    });
  }

  getAllUsers() {
    this.userService.getUsers().pipe(finalize(()=> this.getLocations(this.users))).subscribe((res) => {
      this.users = res as User[];
    })
  }

  getLocations(users: User[]) {
    let locations: UserLocation[] = [];
    users.forEach(user => {
      if (user.latitude && user.longitude) {
        let location : UserLocation = {
          latitude: user.latitude,
          longitude: user.longitude
        }
        locations.push(location);
      }
    })

    if (locations.length > 0) this.showLocations(locations);
  }

  zoomIn() {
    if (this.zoom < (this.options.maxZoom ? this.options.maxZoom : this.zoom)) this.zoom++
  }

  zoomOut() {
    if (this.zoom > (this.options.minZoom ? this.options.minZoom : this.zoom)) this.zoom--
  }
}
