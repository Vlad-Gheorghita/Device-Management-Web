import { Device } from "./device";
import { Role } from "./role";
import { UserLocation } from "./user-location";

export class User {
    id?: number;
    name?: string;
    location?: UserLocation;
    roles?: Role[];
    devices?: Device;
    token?: string;
    email?: string;
}