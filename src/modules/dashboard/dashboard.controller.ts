import { Response } from "express";
import { AuthRequest } from "../../common/middleware/auth.middleware";
import { getSummary, getCategoryBreakdown } from "./dashboard.service";

export const summary = async (req: AuthRequest, res: Response) => {
  const data = await getSummary(req.user.id);
  res.json(data);
};

export const category = async (req: AuthRequest, res: Response) => {
  const data = await getCategoryBreakdown(req.user.id);
  res.json(data);
};
