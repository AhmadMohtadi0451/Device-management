import { create } from "zustand";
import type { Device } from "@/types/device.types";
import { mockDevices } from "@/lib/mockData";

interface DeviceStore {
  devices: Device[];
  removeDevice: (id: string) => void;
}

const useDeviceStore = create<DeviceStore>((set) => ({
  devices: mockDevices,

  removeDevice: (id) =>
    set((state) => ({
      devices: state.devices.filter((device) => device.id !== id),
    })),
}));

export default useDeviceStore;
