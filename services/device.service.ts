import type { Device } from "@/types/device.types";
import { mockDevices } from "@/lib/mockData";
import { DeviceModel } from "@/models/device.models";

DeviceModel.seed(mockDevices);

export const DeviceService = {
  async getAll(): Promise<Device[]> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return DeviceModel.getAll();
  },

  async create(device: Omit<Device, "id">): Promise<Device> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return DeviceModel.create(device);
  },

  async delete(id: string): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return DeviceModel.delete(id);
  },
};
