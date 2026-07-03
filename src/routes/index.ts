import { type FastifyPluginAsync } from "fastify";
import chatPlugin from "@/plugins/chat.plugin";
import messagePlugin from "@/plugins/message.plugin";
import healthRoutes from "./health";
import chatRoutes from "./chat";
import messageRoutes from "./message";

const routes: FastifyPluginAsync = async (fastify) => {
  fastify.register(chatPlugin);
  fastify.register(messagePlugin);

  fastify.register(healthRoutes, { prefix: "/health" });
  fastify.register(chatRoutes, { prefix: "/chat" });
  fastify.register(messageRoutes, { prefix: "/chat" });
};

export default routes;
