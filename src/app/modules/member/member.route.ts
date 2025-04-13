import express from "express";
import { memberController } from "./member.controller";

const router = express.Router();

router.post("/", memberController.createMemberIntoDB);
router.get("/all", memberController.getAllFromDB);
router.get("/:id", memberController.getFromDB);
router.put("/:id", memberController.updateIntoDB);
router.delete("/:id", memberController.deleteIntoDB);

export const MemberRoute = router;
