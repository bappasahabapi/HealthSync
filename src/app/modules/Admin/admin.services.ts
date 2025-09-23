import { PrismaClient } from "../../../generated/prisma";

const prisma = new PrismaClient();

const getAdmins = async (params: any) => {
  console.log({ params });
  const result = await prisma.admin.findMany({

    //search
    where: {
      OR: [
        {
          name: {
            contains: params.searchTerm,
            mode: "insensitive", // optional, case-insensitive search
          },
        },
        {
             email:{
            contains: params.searchTerm,
            mode: "insensitive", 
          }
        },
        {
             contactNumber:{
            contains: params.searchTerm,
            mode: "insensitive", 
          }
        }
      ],
    },
  });
  return result;
};

export const adminService = {
  getAdmins,
};
