import { Prisma, PrismaClient } from "@prisma/client";
import { adminSearchableFileds } from "./admin.constant";

const prisma = new PrismaClient();

const getAdmins = async (params: any, options:any) => {
  
  const {limit,page}=options;
  const {searchTerm, ...filterData}=params

  //todo: 1st way to handle searchTerm
  const andConditions:Prisma.AdminWhereInput[] =[];


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
    where: whereConditions,
    skip:Number((page-1) * limit), // how many data will be skip
    take:Number(limit) // show how many data in per page
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
