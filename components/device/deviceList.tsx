"use client";

import type { Device } from "@/types/device.types";
import DeviceSkeleton from "../ui/skeleton";
import EmptyState from "../ui/emptyState";
import DeviceCard from "./deviceCard";

interface DeviceListProps {
  devices: Device[];
  onDelete: (device: Device) => void;
  isLoading?: boolean;
}

const DeviceList = ({
  devices,
  onDelete,
  isLoading = false,
}: DeviceListProps) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <DeviceSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (devices.length === 0) {
    return (
      <EmptyState
        title="No devices found"
        description="Try changing your filters"
      />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {devices.map((device) => {
        return (
          <DeviceCard key={device.id} device={device} onDelete={onDelete} />
        );
      })}
    </div>
  );
};

export default DeviceList;
