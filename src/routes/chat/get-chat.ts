import {
  Type,
  type FastifyPluginAsyncTypebox,
} from "@fastify/type-provider-typebox";
import { ChatSchema } from "@/schemas/chat";

const plugin: FastifyPluginAsyncTypebox = async (fastify) => {
  fastify.get(
    "/:id",
    {
      schema: {
        params: Type.Object({
          id: Type.String(),
        }),
        response: {
          200: ChatSchema,
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

      return reply.send(chat);
    },
  );
};

export default plugin;
