import { Hono } from "hono";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { createDb } from "../db";
import * as schema from "../db/schema";
import type { AppEnv } from "../types";

const app = new Hono<AppEnv>();

function createAuth(env: AppEnv["Bindings"]) {
  const db = createDb(env.DB);

  return betterAuth({
    database: drizzleAdapter(db, {
      provider: "sqlite",
      schema,
    }),
    secret: env.BETTER_AUTH_SECRET,
    baseURL: env.BETTER_AUTH_URL,
    emailAndPassword: {
      enabled: true,
    },
  });
}

app.on(["GET", "POST"], "/*", async (c) => {
  const auth = createAuth(c.env);
  return auth.handler(c.req.raw);
});

export { app as authRoutes };
