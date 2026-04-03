import { Response } from "express";
import { AuthRequest } from "../../common/middleware/auth.middleware";
import {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} from "./finance.service";
import { recordSchema } from "./schema/finance.schema";

export const create = async (req: AuthRequest, res: Response) => {
  const parsed = recordSchema.parse(req.body);
  const record = await createRecord(parsed, req.user!.id);
  res.json(record);
};

export const getAll = async (req: AuthRequest, res: Response) => {
  const records = await getRecords(req.user!.id, req.query);
  res.json(records);
};

export const update = async (
  req: AuthRequest & { params: { id: string } },
  res: Response
) => {
  const result = await updateRecord(req.params.id, req.user!.id, req.body);
  res.json(result);
};

export const remove = async (
  req: AuthRequest & { params: { id: string } },
  res: Response
) => {
  const result = await deleteRecord(req.params.id, req.user!.id);
  res.json(result);
};
