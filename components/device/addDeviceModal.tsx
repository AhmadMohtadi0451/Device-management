"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { deviceSchema, type DeviceFormData } from "@/lib/validations";
import Input from "../ui/input";
import Modal from "../ui/modal";
import Button from "../ui/button";

interface AddDeviceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (data: DeviceFormData) => void;
}

const AddDeviceModal = ({ isOpen, onClose, onAdd }: AddDeviceModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DeviceFormData>({
    resolver: zodResolver(deviceSchema),
    defaultValues: {
      name: "",
      ip: "",
      status: "Online",
    },
  });

  const onSubmit = (data: DeviceFormData) => {
    onAdd(data);
    reset();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Device">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          label="Device Name"
          placeholder="Enter device name"
          {...register("name")}
          error={errors.name?.message}
        />

        <Input
          label="IP Address"
          placeholder="e.g. 192.168.1.1"
          {...register("ip")}
          error={errors.ip?.message}
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <select
            {...register("status")}
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
