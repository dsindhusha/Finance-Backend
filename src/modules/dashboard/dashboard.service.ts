import prisma from "../../core/database/prisma";
import { Record } from "@prisma/client";

export const getSummary = async (userId: string) => {
  const records: Record[] = await prisma.record.findMany({
    where: { userId },
  });

  const totalIncome = records
    .filter((r: Record) => r.type === "income")
    .reduce((sum: number, r: Record) => sum + r.amount, 0);

  const totalExpense = records
    .filter((r: Record) => r.type === "expense")
    .reduce((sum: number, r: Record) => sum + r.amount, 0);

  return {
    totalIncome,
    totalExpense,
    netBalance: totalIncome - totalExpense,
  };
};

export const getCategoryBreakdown = async (userId: string) => {
  const records: Record[] = await prisma.record.findMany({
    where: { userId },
  });

  const map: Record<string, number> = {};

  records.forEach((r: Record) => {
    if (!map[r.category]) map[r.category] = 0;
    map[r.category] += r.amount;
  });

  return Object.keys(map).map((category) => ({
    category,
    amount: map[category],
  }));
};
