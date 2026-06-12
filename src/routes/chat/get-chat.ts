import {
  Type,
  FastifyPluginAsyncTypebox,
} from "@fastify/type-provider-typebox";

const plugin: FastifyPluginAsyncTypebox = async (fastify) => {
  fastify.get(
    "/:id",
    {
      schema: {
        params: Type.Object({
          id: Type.String(),
        }),
      },
    },
    async function (request, reply) {
      const { id } = request.params;

      return reply.send({ status: `Chat with ${id} has been got` });
    },
  );
};

export default plugin;
