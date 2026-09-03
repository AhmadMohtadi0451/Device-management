import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { DeviceService } from "@/services/device.service";
import type { Device } from "@/types/device.types";

export const useDevices = () => {
  const queryClient = useQueryClient();

  const { data: devices = [], isLoading } = useQuery({
    queryKey: ["devices"],
    queryFn: DeviceService.getAll,
    staleTime: 5000,
  });

  const addDeviceMutation = useMutation({
    mutationFn: DeviceService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["devices"] });
    },
  });

  const deleteDeviceMutation = useMutation({
    mutationFn: DeviceService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["devices"] });
    },
  });

  const addDevice = async (device: Omit<Device, "id">) => {
    return addDeviceMutation.mutateAsync(device);
  };

  const deleteDevice = async (id: string) => {
    return deleteDeviceMutation.mutateAsync(id);
  };

  return {
    devices,
    isLoading,
    addDevice,
    deleteDevice,
    isAdding: addDeviceMutation.isPending,
    isDeleting: deleteDeviceMutation.isPending,
  };
};
