import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";

const plugin: FastifyPluginAsyncTypebox = async (fastify) => {
  fastify.post("/", async function (request, reply) {
    return reply.send({ status: "Chat created!" });
  });
};

export default plugin;
