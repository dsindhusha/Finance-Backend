import { Router } from "express";
import { authenticate } from "../../common/middleware/auth.middleware";
import { authorize } from "../../common/middleware/role.middleware";
import { create, getAll, update, remove } from "./finance.controller";

const router = Router();

router.use(authenticate);

router.post("/", authorize(["ADMIN"]), create);
router.get("/", authorize(["ADMIN", "ANALYST", "VIEWER"]), getAll);
router.put("/:id", authorize(["ADMIN"]), update);
router.delete("/:id", authorize(["ADMIN"]), remove);

export default router;
