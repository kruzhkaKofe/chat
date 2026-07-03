import { MessageRepository } from "@/repositories/message.repository";
import { type Message } from "@/schemas/message";

export class MessageService {
  constructor(private repository: MessageRepository) {}

  async sendUserMessage(chatId: string, content: string): Promise<Message> {
    return this.repository.send(chatId, "user", content);
  }

  async sendAssistantMessage(
    chatId: string,
    content: string,
  ): Promise<Message> {
    return this.repository.send(chatId, "assistant", content);
  }

  async getMessagesOfChat(chatId: string) {
    return this.repository.getMessages(chatId);
  }
}
