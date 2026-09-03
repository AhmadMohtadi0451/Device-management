import { create } from "zustand";
import type { Device } from "@/types/device.types";
import { mockDevices } from "@/lib/mockData";

interface DeviceStore {
  devices: Device[];
  addDevice: (device: Device) => void;
  removeDevice: (id: string) => void;
}

const useDeviceStore = create<DeviceStore>((set) => ({
  devices: mockDevices,

  addDevice: (device) =>
    set((state) => ({
      devices: [...state.devices, device],
    })),

  removeDevice: (id) =>
    set((state) => ({
      devices: state.devices.filter((device) => device.id !== id),
    })),
}));

export default useDeviceStore;
