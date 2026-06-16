import { ChatRepository } from "@/repository/chat.repository";
import { ChatService } from "@/services/chat.service";

const chatRepository = new ChatRepository();
export const chatService = new ChatService(chatRepository);
