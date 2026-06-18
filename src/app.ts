import Fastify from "fastify";
import routes from "./routes";
import { type TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import postgres from "@fastify/postgres";

export async function buildApp() {
  const app = Fastify({
    // logger: true,
  }).withTypeProvider<TypeBoxTypeProvider>();

  app.register(postgres, {
    connectionString: process.env.DATABASE_URL,
  });

  app.register(routes);

  return app;
}
