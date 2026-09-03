import type { Device } from "@/types/device.types";
import DeviceCard from "./deviceCard";
import EmptyState from "../ui/emptyState";

interface DeviceListProps {
  devices: Device[];
  onDelete: (id: string) => void;
}

const DeviceList = ({ devices, onDelete }: DeviceListProps) => {
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
      {devices.map((device) => (
        <DeviceCard key={device.id} device={device} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default DeviceList;
