import { type FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";
import createChat from "./create-chat";
import getChat from "./get-chat";
import chatPlugin from "@/plugins/chat.plugin";

const plugin: FastifyPluginAsyncTypebox = async (fastify) => {
  fastify.register(chatPlugin);
  fastify.register(createChat);
  fastify.register(getChat);
};

export default plugin;
