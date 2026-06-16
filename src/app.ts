import Fastify from "fastify";
import routes from "./routes";
import { type TypeBoxTypeProvider } from "@fastify/type-provider-typebox";

export async function buildApp() {
  const app = Fastify({
    // logger: true,
  }).withTypeProvider<TypeBoxTypeProvider>();

  app.register(routes);

  return app;
}
