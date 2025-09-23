// import { PrismaClient } from "../../../generated/prisma";

// const prisma = new PrismaClient();

// const getAdmins = async (params: any) => {
//   console.log({ params });
//   const result = await prisma.admin.findMany({

//     //search
//     where: {
//       OR: [
//         {
//           name: {
//             contains: params.searchTerm,
//             mode: "insensitive", // optional, case-insensitive search
//           },
//         },
//         {
//              email:{
//             contains: params.searchTerm,
//             mode: "insensitive",
//           }
//         },
//         {
//              contactNumber:{
//             contains: params.searchTerm,
//             mode: "insensitive",
//           }
//         }
//       ],
//     },
//   });

//   return result;
// };

// export const adminService = {
//   getAdmins,
// };


//todo: another way to handle if no searchTerm
import { PrismaClient, Prisma } from "../../../generated/prisma";

const prisma = new PrismaClient();

const getAdmins = async (params: any) => {
  const searchTerm = params?.searchTerm as string | undefined;

  const where: Prisma.AdminWhereInput = searchTerm
    ? {
        OR: [
          {
            name: {
              contains: searchTerm,
              mode: "insensitive" as Prisma.QueryMode,
            },
          },
          {
            email: {
              contains: searchTerm,
              mode: "insensitive" as Prisma.QueryMode,
            },
          },
          {
            contactNumber: {
              contains: searchTerm,
              mode: "insensitive" as Prisma.QueryMode,
            },
          },
        ],
      }
    : {}; // no filter if no searchTerm

  return prisma.admin.findMany({ where });
};

export const adminService = {
  getAdmins,
};
