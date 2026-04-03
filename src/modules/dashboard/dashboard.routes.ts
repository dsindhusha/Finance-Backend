import { Router } from "express";
import { authenticate } from "../../common/middleware/auth.middleware";
import { authorize } from "../../common/middleware/role.middleware";
import { summary, category } from "./dashboard.controller";

const router = Router();

router.use(authenticate);

router.get("/summary", authorize(["ADMIN", "ANALYST"]), summary);
router.get("/categories", authorize(["ADMIN", "ANALYST"]), category);

export default router;
