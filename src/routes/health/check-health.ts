import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";

const plugin: FastifyPluginAsyncTypebox = async (fastify) => {
  fastify.get("/", async function (request, reply) {
    return reply.send({ status: "Health is OK" });
  });
};

export default plugin;
