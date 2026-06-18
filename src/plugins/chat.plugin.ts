import fp from "fastify-plugin";
import { type FastifyInstance } from "fastify";
import { ChatRepository } from "@/repositories/chat.repository";
import { ChatService } from "@/services/chat.service";

declare module "fastify" {
  interface FastifyInstance {
    chatService: ChatService;
  }
}

async function chatPlugin(fastify: FastifyInstance) {
  const repository = new ChatRepository(fastify);
  const service = new ChatService(repository);

  fastify.decorate("chatService", service);
}

export default fp(chatPlugin, { name: "chat-plugin" });
