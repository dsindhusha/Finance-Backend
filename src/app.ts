import express from "express";
import dashboardRoutes from "./modules/dashboard/dashboard.routes";
import financeRoutes from "./modules/finance/finance.routes";
import authRoutes from "./modules/auth/auth.routes";
import { errorHandler } from "./common/middleware/error.middleware";

const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/records", financeRoutes);
app.use("/api/v1/dashboard", dashboardRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.use(errorHandler);

export default app;
