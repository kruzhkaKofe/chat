import { type FastifyInstance } from "fastify";
import { type Chat } from "@/schemas/chat";

export class ChatRepository {
  constructor(private fastify: FastifyInstance) {}

  async create(): Promise<Chat> {
    const { rows } = await this.fastify.pg.query<Chat>(
      `INSERT INTO chats (name)
       VALUES ($1)
       RETURNING id, name, created_at AS "createdDate"`,
      [""],
    );

    return rows[0];
  }

  async findById(id: string): Promise<Chat | undefined> {
    const { rows } = await this.fastify.pg.query<Chat>(
      `SELECT id, name, created_at AS "createdDate" FROM chats WHERE id = $1`,
      [id],
    );

    return rows[0];
  }

  async delete(id: string): Promise<boolean> {
    const { rowCount } = await this.fastify.pg.query(
      `DELETE FROM chats WHERE id = $1`,
      [id],
    );

    return (rowCount ?? 0) > 0;
  }
}
