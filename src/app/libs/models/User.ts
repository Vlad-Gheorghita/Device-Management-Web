import { Device } from "./device";

export interface User {
    id?: number;
    name?: string;
    location?: string;
    roles?: string[];
    devices?: Device;
    token?: string;
    email?: string;
}