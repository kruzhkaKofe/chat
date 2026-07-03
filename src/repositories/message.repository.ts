import { type FastifyInstance } from "fastify";
import { type Message } from "@/schemas/message";

export class MessageRepository {
  constructor(private fastify: FastifyInstance) {}

  async send(
    chatId: string,
    role: Message["role"],
    content: string,
  ): Promise<Message> {
    const { rows } = await this.fastify.pg.query<Message>(
      `INSERT INTO messages (chat_id, role, content)
       VALUES ($1, $2, $3)
       RETURNING id, chat_id AS "chatId", role, content, created_at AS "createdAt"`,
      [chatId, role, content],
    );

    return rows[0];
  }

  async getMessages(chatId: string): Promise<Message[]> {
    const { rows } = await this.fastify.pg.query<Message>(
      `SELECT id, chat_id AS "chatId", role, content, created_at AS "createdAt"
       FROM messages
       WHERE chat_id = $1
       ORDER BY created_at ASC`,
      [chatId],
    );

    return rows;
  }
}
