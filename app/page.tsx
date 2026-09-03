"use client";

import { useState } from "react";

import useDeviceStore from "@/store/deviceStore";
import Button from "@/components/ui/button";
import DeviceList from "@/components/device/deviceList";
import AddDeviceModal from "@/components/device/addDeviceModal";

const Home = () => {
  const { devices, addDevice, removeDevice } = useDeviceStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddDevice = (data: {
    name: string;
    ip: string;
    status: "Online" | "Offline" | "Warning";
  }) => {
    const newDevice = {
      id: crypto.randomUUID(),
      name: data.name,
      ip: data.ip,
      status: data.status,
      lastPing: "Just now",
    };
    addDevice(newDevice);
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Device Management
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              {devices.length} devices registered in system
            </p>
          </div>
          <Button variant="primary" onClick={() => setIsModalOpen(true)}>
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add New Device
          </Button>
        </div>

        <DeviceList devices={devices} onDelete={removeDevice} />

        <AddDeviceModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAdd={handleAddDevice}
        />
      </div>
    </main>
  );
};

export default Home;
