import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";
import healt from "./check-health";

const plugin: FastifyPluginAsyncTypebox = async (fastify: any) => {
  fastify.register(healt);
};

export default plugin;
