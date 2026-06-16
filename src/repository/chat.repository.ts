import { type Chat } from "@/schemas/chat";

const chats = new Map<Chat["id"], Chat>();

export class ChatRepository {
  private id = 1;

  create(): Chat {
    const chat: Chat = {
      id: String(this.id),
      name: `Chat with id=${this.id}`,
      createdDate: Date.now(),
    };

    this.id++;

    chats.set(chat.id, chat);
    return chat;
  }

  findById(id: string): Chat | undefined {
    return chats.get(id);
  }
}
