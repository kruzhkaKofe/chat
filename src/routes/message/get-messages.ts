import {
  Type,
  type FastifyPluginAsyncTypebox,
} from "@fastify/type-provider-typebox";
import { MessageSchema } from "@/schemas/message";

const plugin: FastifyPluginAsyncTypebox = async (fastify) => {
  fastify.get(
    "/:id/messages",
    {
      schema: {
        params: Type.Object({
          id: Type.String(),
        }),
        response: {
          200: Type.Array(MessageSchema),
          404: Type.Object({
            message: Type.String(),
          }),
        },
      },
    },
    async function (request, reply) {
      const { id } = request.params;
      const chat = await fastify.chatService.getChatById(id);

      if (!chat) {
        return reply.status(404).send({
          message: "Chat not found",
        });
      }

      const messages = await fastify.messageService.getMessagesOfChat(id);

      return reply.send(messages);
    },
  );
};

export default plugin;
