import express from "express";
import { borrowREcordController } from "./borrow.controller";

const router = express.Router();
router.post("/", borrowREcordController.createBorrowIntoDB);
router.get("/", borrowREcordController.getAllBorrow);
router.get("/:id", borrowREcordController.getBorrow);
router.put("/:id", borrowREcordController.updateBorrow);
router.delete("/:id", borrowREcordController.deleteBorrow);
router.post("/return", borrowREcordController.bookReturn);

export const BorrowRoute = router;
