import express from "express";
import { BookRoute } from "../modules/book/book.route";

import { MemberRoute } from "../modules/member/member.route";

const router = express.Router();

const modularRoute = [
  {
    path: "/book",
    route: BookRoute,
  },
  {
    path: "/member",
    route: MemberRoute,
  },
];

modularRoute.forEach((route) => router.use(route.path, route.route));

export default router;
