import { type FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";
import { HealthStatusSchema } from "@/schemas/health";

const plugin: FastifyPluginAsyncTypebox = async (fastify) => {
  fastify.get(
    "/",
    {
      schema: {
        response: {
          200: HealthStatusSchema,
        },
      },
    },
    async function () {
      return {
        success: true,
      };
    },
  );
};

export default plugin;
