import { Device } from "@/types/device.types";

export const mockDevices: Device[] = [
  {
    id: "1",
    name: "Core-Switch-01",
    ip: "192.168.1.1",
    status: "Online",
    lastPing: "2 mins ago",
  },
  {
    id: "2",
    name: "Edge-Router",
    ip: "10.0.0.1",
    status: "Warning",
    lastPing: "15 mins ago",
  },
  {
    id: "3",
    name: "Storage-NAS",
    ip: "192.168.1.50",
    status: "Offline",
    lastPing: "2 hours ago",
  },
  {
    id: "4",
    name: "Backup-Server",
    ip: "192.168.2.10",
    status: "Online",
    lastPing: "Just now",
  },
];
