import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAdmins = async (params: any) => {
  console.log({ params });

  //todo: 1st way to handle searchTerm
  //set all conditon in of search and filterling
  const andConditions:Prisma.AdminWhereInput[] =[];
  if(params.searchTerm){
    andConditions.push(
      {
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
    )
  }

  console.dir(andConditions,{depth:'infinity'})
  const whereConditions:Prisma.AdminWhereInput= {AND: andConditions}

  const result = await prisma.admin.findMany({
    where: whereConditions
  });

  return result;
};

export const adminService = {
  getAdmins,
};


//todo: another way to handle if no searchTerm
// import { PrismaClient, Prisma } from "../../../generated/prisma";

// const prisma = new PrismaClient();

// const getAdmins = async (params: any) => {
//   const searchTerm = params?.searchTerm as string | undefined;

//   const where: Prisma.AdminWhereInput = searchTerm
//     ? {
//         OR: [
//           {
//             name: {
//               contains: searchTerm,
//               mode: "insensitive" as Prisma.QueryMode,
//             },
//           },
//           {
//             email: {
//               contains: searchTerm,
//               mode: "insensitive" as Prisma.QueryMode,
//             },
//           },
//           {
//             contactNumber: {
//               contains: searchTerm,
//               mode: "insensitive" as Prisma.QueryMode,
//             },
//           },
//         ],
//       }
//     : {}; // no filter if no searchTerm

//   return prisma.admin.findMany({ where });
// };

// export const adminService = {
//   getAdmins,
// };
