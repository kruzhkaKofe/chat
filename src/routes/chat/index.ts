import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";
import createChat from "./create-chat";
import getChat from "./get-chat";

const plugin: FastifyPluginAsyncTypebox = async (fastify) => {
  fastify.register(createChat);
  fastify.register(getChat);
};

export default plugin;
