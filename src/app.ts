import express from "express";
import dashboardRoutes from "./modules/dashboard/dashboard.routes";
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1/dashboard", dashboardRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

export default app;
