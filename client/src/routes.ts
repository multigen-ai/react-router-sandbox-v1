import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/_index.tsx"),
    route("charts", "routes/charts.tsx"),
    route("dashboard", "routes/dashboard.tsx"),
    route("showcase", "routes/showcase.tsx"),
] satisfies RouteConfig;


