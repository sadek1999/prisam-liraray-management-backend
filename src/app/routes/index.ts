import express from "express";
import { BookRoute } from "../modules/book/book.route";

import { MemberRoute } from "../modules/member/member.route";
import { BorrowRoute } from "../modules/borrow/borrow.routes";

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
  {
    path: "/borrow",
    route:BorrowRoute ,
  },
];

modularRoute.forEach((route) => router.use(route.path, route.route));

export default router;
