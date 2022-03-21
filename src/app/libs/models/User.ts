import { Device } from "./device";
import { Role } from "./role";

export interface User {
    id?: number;
    name?: string;
    location?: string;
    roles?: Role[];
    devices?: Device;
    token?: string;
    email?: string;
}