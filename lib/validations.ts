import { z } from "zod";

export const deviceSchema = z.object({
  name: z.string().min(1, "Device name is required"),
  ip: z
    .string()
    .regex(
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
      "Invalid IP address format",
    ),
  status: z.enum(["Online", "Offline", "Warning"]),
});

export type DeviceFormData = z.infer<typeof deviceSchema>;
