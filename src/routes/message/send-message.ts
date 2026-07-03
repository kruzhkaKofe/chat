import {
  Type,
  type FastifyPluginAsyncTypebox,
} from "@fastify/type-provider-typebox";
import { MessageSchema } from "@/schemas/message";

const plugin: FastifyPluginAsyncTypebox = async (fastify) => {
  fastify.post(
    "/:id/message",
    {
      schema: {
        params: Type.Object({
          id: Type.String(),
        }),
        body: Type.Object({
          content: Type.String(),
        }),
        response: {
          200: MessageSchema,
          404: Type.Object({
            message: Type.String(),
          }),
        },
      },
    },
    async function (request, reply) {
      const chat = await fastify.chatService.getChatById(request.params.id);

      if (!chat) {
        return reply.status(404).send({
          message: "Chat not found",
        });
      }

      const message = await fastify.messageService.sendUserMessage(
        request.params.id,
        request.body.content,
      );

      return reply.send(message);
    },
  );
};

export default plugin;
