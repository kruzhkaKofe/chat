import { ChatRepository } from "@/repositories/chat.repository";
import { type Chat } from "@/schemas/chat";

export class ChatService {
  constructor(private repository: ChatRepository) {}

  async createChat(): Promise<Chat> {
    return this.repository.create();
  }

  async getChatById(id: string): Promise<Chat | undefined> {
    return this.repository.findById(id);
  }

  async deleteChat(id: string): Promise<boolean> {
    return this.repository.delete(id);
  }
}
