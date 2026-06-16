import { type Static, Type } from "@fastify/type-provider-typebox";

export const ChatSchema = Type.Object({
  id: Type.String(),
  name: Type.String(),
  createdDate: Type.Number(),
});

export type Chat = Static<typeof ChatSchema>;

export const CreateChatSuccessSchema = Type.Object({
  status: Type.Literal("Chat created"),
  chat: ChatSchema,
});

export type CreateChatSuccess = Static<typeof CreateChatSuccessSchema>;

export const CreateChatErrorSchema = Type.Object({
  status: Type.Literal("Couldn't creat new chat"),
  chat: Type.Null(),
});

export type CreateChatError = Static<typeof CreateChatErrorSchema>;
