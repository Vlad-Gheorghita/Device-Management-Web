import { Device } from "./Device";

export interface User {
    username?: string;
    location?: string;
    roles?: string[]
    devices?: Device
}