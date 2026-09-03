import type { Device } from "@/types/device.types";
import Badge from "../ui/badge";

interface DeviceCardProps {
  device: Device;
  onDelete: (id: string) => void;
}

const DeviceCard = ({ device, onDelete }: DeviceCardProps) => {
  const statusConfig = {
    Online: {
      color: "text-green-700 bg-green-50 ring-green-600/20",
      dot: "bg-green-500",
      label: "ONLINE",
    },
    Offline: {
      color: "text-red-700 bg-red-50 ring-red-600/20",
      dot: "bg-red-500",
      label: "OFFLINE",
    },
    Warning: {
      color: "text-yellow-700 bg-yellow-50 ring-yellow-600/20",
      dot: "bg-yellow-500",
      label: "WARNING",
    },
  };

  const status = statusConfig[device.status];

  return (
    <div className="group relative bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-200">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-base font-semibold text-gray-900 truncate">
            {device.name}
          </h3>
        </div>
        <button
          onClick={() => onDelete(device.id)}
          className="ml-4 text-gray-400 hover:text-red-600 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>

      {/* IP Address */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
        <svg
          className="w-4 h-4 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"
          />
        </svg>
        <code className="font-mono text-sm">{device.ip}</code>
      </div>

      {/* Status and Last Ping */}
      <Badge status={device.status} />
    </div>
  );
};

export default DeviceCard;
