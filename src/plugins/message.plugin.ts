import fp from "fastify-plugin";
import { type FastifyInstance } from "fastify";
import { MessageRepository } from "@/repositories/message.repository";
import { MessageService } from "@/services/message.service";

declare module "fastify" {
  interface FastifyInstance {
    messageService: MessageService;
  }
}

async function messagePlugin(fastify: FastifyInstance) {
  const repository = new MessageRepository(fastify);
  const service = new MessageService(repository);

  fastify.decorate("messageService", service);
}

export default fp(messagePlugin, { name: "message-plugin" });
