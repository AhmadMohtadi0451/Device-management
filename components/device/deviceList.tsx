import type { Device } from "@/types/device.types";
import DeviceCard from "./deviceCard";

interface DeviceListProps {
  devices: Device[];
  onDelete: (id: string) => void;
}

const DeviceList = ({ devices, onDelete }: DeviceListProps) => {
  if (devices.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
          <svg
            className="w-8 h-8 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.75 17.25v-.25a2.25 2.25 0 012.25-2.25h.75a2.25 2.25 0 012.25 2.25v.25M9.75 17.25v-.25a2.25 2.25 0 012.25-2.25h.75a2.25 2.25 0 012.25 2.25v.25M9.75 17.25h-1.5A2.25 2.25 0 016 15v-3a2.25 2.25 0 012.25-2.25h.75m12.75 0h.75A2.25 2.25 0 0122 12v3a2.25 2.25 0 01-2.25 2.25h-1.5m-12.75 0h7.5m-7.5 0h-1.5A2.25 2.25 0 016 15v-3a2.25 2.25 0 012.25-2.25h.75m12.75 0h.75A2.25 2.25 0 0122 12v3a2.25 2.25 0 01-2.25 2.25h-1.5"
            />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-1">
          هیچ دستگاهی یافت نشد
        </h3>
        <p className="text-sm text-gray-500">
          سعی کنید فیلترهای خود را تغییر دهید
        </p>
      </div>
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
