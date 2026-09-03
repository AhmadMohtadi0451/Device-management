"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { useDevices } from "@/hooks/useDevices";

import type { Device } from "@/types/device.types";
import Button from "@/components/ui/button";
import DeviceFilters from "@/components/device/deviceFilters";
import DeviceList from "@/components/device/deviceList";
import AddDeviceModal from "@/components/device/addDeviceModal";
import DeleteConfirm from "@/components/device/deleteConfirmation";
import { useSnackbar } from "./snackbarProvider";

const Home = () => {
  const { devices, isLoading, addDevice, deleteDevice } = useDevices();
  const { showSuccess, showError } = useSnackbar();
  const searchParams = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<Device | null>(null);

  const search = searchParams.get("search") || "";
  const statusFilter = searchParams.get("status") || "All";

  const filteredDevices = useMemo(() => {
    return devices.filter((device) => {
      const matchSearch =
        device.name.toLowerCase().includes(search.toLowerCase()) ||
        device.ip.includes(search);
      const matchStatus =
        statusFilter === "All" || device.status === statusFilter;
      return matchSearch && matchStatus;
    });
  }, [devices, search, statusFilter]);

  const handleAddDevice = async (data: Omit<Device, "id" | "lastPing">) => {
    try {
      const newDevice = {
        ...data,
        lastPing: "Just now",
      };
      await addDevice(newDevice);
      showSuccess("Device added successfully!");
      setIsModalOpen(false);
    } catch (error) {
      showError("Failed to add device. Please try again.");
    }
  };

  const handleDeleteClick = (device: Device) => {
    setDeleteTarget(device);
  };

  const handleConfirmDelete = async () => {
    if (deleteTarget) {
      try {
        await deleteDevice(deleteTarget.id);
        showSuccess("Device deleted successfully!");
        setDeleteTarget(null);
      } catch (error) {
        showError("Failed to delete device. Please try again.");
      }
    }
  };

  const handleCloseModal = () => {
    setDeleteTarget(null);
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
              {filteredDevices.length} devices registered in system
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

        <DeviceFilters />
        <DeviceList
          devices={filteredDevices}
          onDelete={handleDeleteClick}
          isLoading={isLoading}
        />

        <AddDeviceModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAdd={handleAddDevice}
        />

        <DeleteConfirm
          isOpen={!!deleteTarget}
          onClose={handleCloseModal}
          onConfirm={handleConfirmDelete}
          deviceName={deleteTarget?.name || ""}
        />
      </div>
    </main>
  );
};

export default Home;
