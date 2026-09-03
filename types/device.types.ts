import type { DeviceStatus } from "./deviceStatus.types";

export interface Device {
  id: string;
  name: string;
  ip: string;
  status: DeviceStatus;
  lastPing: string;
}
