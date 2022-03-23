import { Type } from "../enum/enum";
import { User } from "./user";

export class Device {
    id?: number;
    name?: string;
    manufacturer?: string;
    type?: Type;
    operatingSystem?: string;
    operatingSystemVersion?: string;
    processor?: string;
    ram?: number;
    user?: User;
}