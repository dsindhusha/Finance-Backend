import { Router } from "express";
import { register, login } from "./auth.controller";
import { authenticate } from "../../common/middleware/auth.middleware";
import { authorize } from "../../common/middleware/role.middleware";

const router = Router();

router.post("/register", register);
router.post("/login", login);

router.get("/admin-only", authenticate, authorize(["ADMIN"]), (req, res) => {
  res.json({ message: "Admin access granted" });
});

export default router;
