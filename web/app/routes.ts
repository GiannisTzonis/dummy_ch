import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  index("routes/root-redirect.tsx"),

  route(":lang", "routes/lang-layout.tsx", [
    index("routes/home.tsx"),

    route("festival/:year", "routes/festival.tsx"),
    route("festivals", "routes/festivals-index.tsx"),

    route("masterclass/:year", "routes/masterclass.tsx"),
    route("masterclasses", "routes/masterclasses-index.tsx"),

    route("competition/:slug", "routes/competition.tsx"),

    route("news/:slug", "routes/news-post.tsx"),

    route("our-choir", "routes/our-choir.tsx"),
    route("our-conductor", "routes/our-conductor.tsx"),
  ]),
] satisfies RouteConfig;
