"use client";

import { useState } from "react";
import Modal from "../ui/modal";
import Input from "../ui/input";
import Button from "../ui/button";

interface AddDeviceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (data: {
    name: string;
    ip: string;
    status: "Online" | "Offline" | "Warning";
  }) => void;
}

const AddDeviceModal = ({ isOpen, onClose, onAdd }: AddDeviceModalProps) => {
  const [name, setName] = useState("");
  const [ip, setIp] = useState("");
  const [status, setStatus] = useState<"Online" | "Offline" | "Warning">(
    "Online",
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({ name, ip, status });
    setName("");
    setIp("");
    setStatus("Online");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Device">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Device Name"
          placeholder="Enter device name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <Input
          label="IP Address"
          placeholder="e.g. 192.168.1.1"
          value={ip}
          onChange={(e) => setIp(e.target.value)}
          required
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value as "Online" | "Offline" | "Warning")
            }
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
            <option value="Warning">Warning</option>
          </select>
        </div>

        <div className="flex items-center justify-end gap-3 pt-4">
          <Button variant="ghost" type="button" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Add Device
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default AddDeviceModal;
