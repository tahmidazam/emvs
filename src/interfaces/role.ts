import { z } from "zod";

export const RoleSchema = z.object({
  description: z.string(),
  title: z.string(),
  priority: z.number().int(),
  members: z.array(
    z.object({
      name: z.string(),
      email: z.string().email(),
    })
  ),
});

export type Role = z.infer<typeof RoleSchema>;
