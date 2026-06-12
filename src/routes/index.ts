import { FastifyPluginAsync } from "fastify";
import healthRoutes from "./health/index";
import chatRoutes from "./chat/index";

const routes: FastifyPluginAsync = async (fastify) => {
  fastify.register(healthRoutes, { prefix: "/health" });
  fastify.register(chatRoutes, { prefix: "/chat" });
};

export default routes;
