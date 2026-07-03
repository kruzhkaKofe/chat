import { type FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";
import chatPlugin from "@/plugins/chat.plugin";
import createChat from "./create-chat";
import getChat from "./get-chat";
import deleteChat from "./delete-chat";

const plugin: FastifyPluginAsyncTypebox = async (fastify) => {
  fastify.register(chatPlugin);
  fastify.register(createChat);
  fastify.register(getChat);
  fastify.register(deleteChat);
};

export default plugin;
