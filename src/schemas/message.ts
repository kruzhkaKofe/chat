import { type Static, Type } from "@fastify/type-provider-typebox";

export const MessageSchema = Type.Object({
  id: Type.Number(),
  chatId: Type.String(),
  role: Type.Union([Type.Literal("user"), Type.Literal("assistant")]),
  content: Type.String(),
  createdAt: Type.Number(),
});

export type Message = Static<typeof MessageSchema>;
