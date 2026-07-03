import {
  Type,
  type FastifyPluginAsyncTypebox,
} from "@fastify/type-provider-typebox";

const plugin: FastifyPluginAsyncTypebox = async (fastify) => {
  fastify.delete(
    "/:id",
    {
      schema: {
        params: Type.Object({
          id: Type.String(),
        }),
        response: {
          204: Type.Null(),
          404: Type.Object({
            message: Type.String(),
          }),
        },
      },
    },
    async function (request, reply) {
      const isDeleted = await fastify.chatService.deleteChat(request.params.id);

      if (!isDeleted) {
        return reply.status(404).send({
          message: "Chat not found",
        });
      }

      return reply.status(204).send(null);
    },
  );
};

export default plugin;
