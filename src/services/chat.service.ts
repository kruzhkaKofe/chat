import { ChatRepository } from "@/repository/chat.repository";
import { type Chat } from "@/schemas/chat";

export class ChatService {
  constructor(private repository: ChatRepository) {}

  createChat(): Chat {
    return this.repository.create();
  }

  getChatById(id: string): Chat | undefined {
    return this.repository.findById(id);
  }
}
