import { type FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";
import sendMessage from "./send-message";
import getMessages from "./get-messages";

const plugin: FastifyPluginAsyncTypebox = async (fastify) => {
  fastify.register(sendMessage);
  fastify.register(getMessages);
};

export default plugin;
