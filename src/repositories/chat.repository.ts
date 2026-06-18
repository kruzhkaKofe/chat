import { type FastifyInstance } from "fastify";
import { type Chat } from "@/schemas/chat";
import { randomUUID } from "crypto";

export class ChatRepository {
  constructor(private fastify: FastifyInstance) {}

  async create(): Promise<Chat> {
    const { rows } = await this.fastify.pg.query<Chat>(
      `INSERT INTO chats (name, created_date)
       VALUES ($1, $2)
       RETURNING id, name, created_date AS "createdDate"`,
      [`${randomUUID()}`, Date.now()],
    );
    return rows[0];
  }

  async findById(id: string): Promise<Chat | undefined> {
    const { rows } = await this.fastify.pg.query<Chat>(
      `SELECT id, name, created_date AS "createdDate" FROM chats WHERE id = $1`,
      [id],
    );
    return rows[0];
  }
}
