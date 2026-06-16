import { type Static, Type } from "@fastify/type-provider-typebox";

export const HealthStatusSchema = Type.Object({
  success: Type.Boolean(),
});

export type HealthStatus = Static<typeof HealthStatusSchema>;
