"use client";

import { useState } from "react";
import type { Device } from "@/types/device.types";
import EmptyState from "../ui/emptyState";
import DeviceCard from "./deviceCard";
import DeleteConfirm from "./deleteConfirmation";

interface DeviceListProps {
  devices: Device[];
  onDelete: (id: string) => void;
}

const DeviceList = ({ devices, onDelete }: DeviceListProps) => {
  const [deleteTarget, setDeleteTarget] = useState<Device | null>(null);

  const handleDeleteClick = (device: Device) => {
    setDeleteTarget(device);
  };

  const handleConfirmDelete = () => {
    if (deleteTarget) {
      onDelete(deleteTarget.id);
      setDeleteTarget(null);
    }
  };

  const handleCloseModal = () => {
    setDeleteTarget(null);
  };

  if (devices.length === 0) {
    return (
      <EmptyState
        title="No devices found"
        description="Try changing your filters"
      />
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {devices.map((device) => (
          <DeviceCard
            key={device.id}
            device={device}
            onDelete={() => handleDeleteClick(device)}
          />
        ))}
      </div>

      <DeleteConfirm
        isOpen={!!deleteTarget}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
        deviceName={deleteTarget?.name || ""}
      />
    </>
  );
};

export default DeviceList;
