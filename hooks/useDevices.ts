import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { DeviceService } from "@/services/device.service";

export const useDevices = () => {
  const queryClient = useQueryClient();

  const { data: devices = [], isLoading } = useQuery({
    queryKey: ["devices"],
    queryFn: DeviceService.getAll,
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

  return {
    devices,
    isLoading,
    addDevice: addDeviceMutation.mutate,
    deleteDevice: deleteDeviceMutation.mutate,
    isAdding: addDeviceMutation.isPending,
    isDeleting: deleteDeviceMutation.isPending,
  };
};
