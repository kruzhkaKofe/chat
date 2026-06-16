import { type FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";
import healt from "./check-health";

const plugin: FastifyPluginAsyncTypebox = async (fastify) => {
  fastify.register(healt);
};

export default plugin;
