import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAdmins = async (params: any) => {
  
  const {searchTerm, ...filterData}=params

  //todo: 1st way to handle searchTerm
  const andConditions:Prisma.AdminWhereInput[] =[];
  const adminSearchableFileds =['name','email','contactNumber']

  //searching
  if(params.searchTerm){
    andConditions.push(
      {
      OR:adminSearchableFileds?.map(field=>({
         [field]:{
            contains: params.searchTerm,
            mode: "insensitive",
          }
      }))
    },
    )
  }

  //filtering
  //convert to array
  if(Object.keys(filterData).length > 0){
    andConditions.push({
      AND:Object.keys(filterData).map(key=>({
        [key]:{
          equals:filterData[key] // match exact search
        }
      }))
    })
  }

  // console.dir(andConditions,{depth:'infinity'})
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
