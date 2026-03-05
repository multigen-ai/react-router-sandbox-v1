import { createMiddleware } from "hono/factory";
import type { AppEnv } from "../types";

export const requireAuth = createMiddleware<AppEnv>(async (c, next) => {
  const sessionToken =
    c.req.header("Authorization")?.replace("Bearer ", "") ??
    c.req.header("Cookie")?.match(/better-auth\.session_token=([^;]+)/)?.[1];

  if (!sessionToken) {
    return c.json({ error: "Unauthorized" }, 401);
  }

  await next();
});
