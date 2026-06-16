import { type FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";
import { CreateChatSuccessSchema } from "@/schemas/chat";
import { chatService } from "@/containers";

const plugin: FastifyPluginAsyncTypebox = async (fastify) => {
  fastify.post(
    "/",
    {
      schema: {
        response: {
          201: CreateChatSuccessSchema,
        },
      },
    },
    async function (_, reply) {
      const chat = chatService.createChat();

      return reply.status(201).send({ status: "Chat created", chat });
    },
  );
};

export default plugin;
