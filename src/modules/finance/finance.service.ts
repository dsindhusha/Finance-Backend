import prisma from "../../core/database/prisma";

export const createRecord = async (data: any, userId: string) => {
  return prisma.record.create({
    data: {
      ...data,
      userId,
    },
  });
};

export const getRecords = async (userId: string, query: any) => {
  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 10;

  return prisma.record.findMany({
    where: {
      userId,
      ...(query.type && { type: query.type }),
      ...(query.category && { category: query.category }),
    },
    skip: (page - 1) * limit,
    take: limit,
    orderBy: { date: "desc" },
  });
};

export const updateRecord = async (id: string, userId: string, data: any) => {
  return prisma.record.updateMany({
    where: { id, userId },
    data,
  });
};

export const deleteRecord = async (id: string, userId: string) => {
  return prisma.record.deleteMany({
    where: { id, userId },
  });
};
