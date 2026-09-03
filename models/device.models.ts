import type { Device } from "@/types/device.types";

export class DeviceModel {
  private static devices: Device[] = [];

  static async getAll(): Promise<Device[]> {
    return this.devices;
  }

  static async create(device: Omit<Device, "id">): Promise<Device> {
    const newDevice = {
      ...device,
      id: crypto.randomUUID(),
    };
    this.devices = [...this.devices, newDevice];
    return newDevice;
  }

  static async delete(id: string): Promise<void> {
    this.devices = this.devices.filter((device) => device.id !== id);
  }

  static async update(id: string, data: Partial<Device>): Promise<Device> {
    const device = this.devices.find((d) => d.id === id);
    if (!device) throw new Error("Device not found");
    const updated = { ...device, ...data };
    this.devices = this.devices.map((data) =>
      data.id === id ? updated : data,
    );
    return updated;
  }

  static async seed(data: Device[]): Promise<void> {
    this.devices = data;
  }
}
