import { User } from "./user";

export interface Device {
    id?: number;
    name?: string;
    manufacturer?: string;
    type?: string;
    operatingSystem?: string;
    operatingSystemVersion?: string;
    processor?: string;
    ram?: number;
    user?: User;
}