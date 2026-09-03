import { create } from "zustand";
import type { Device } from "@/types/device.types";
import { mockDevices } from "@/lib/mockData";

interface DeviceStore {
  devices: Device[];
  search: string;
  statusFilter: "All" | "Online" | "Offline" | "Warning";
  addDevice: (device: Device) => void;
  removeDevice: (id: string) => void;
  setSearch: (search: string) => void;
  setStatusFilter: (status: "All" | "Online" | "Offline" | "Warning") => void;
}

const useDeviceStore = create<DeviceStore>((set) => ({
  devices: mockDevices,
  search: "",
  statusFilter: "All",

  addDevice: (device) =>
    set((state) => ({
      devices: [...state.devices, device],
    })),

  removeDevice: (id) =>
    set((state) => ({
      devices: state.devices.filter((device) => device.id !== id),
    })),

  setSearch: (search) => set({ search }),

  setStatusFilter: (statusFilter) => set({ statusFilter }),
}));

export default useDeviceStore;
