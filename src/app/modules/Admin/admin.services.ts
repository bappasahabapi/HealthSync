import { Admin, Prisma, UserStatus } from "@prisma/client";
import { adminSearchableFileds } from "./admin.constant";
import { calculatePagination } from "../../../helper/paginationHelper";
import { prisma } from "../../../shared/prisma";

const getAdmins = async (params: any, options: any) => {
  // const {limit,page}=options;
  const { limit, page, skip, sortBy, sortOrder } = calculatePagination(options);
  const { searchTerm, ...filterData } = params;

  //todo: 1st way to handle searchTerm
  const andConditions: Prisma.AdminWhereInput[] = [];

  //searching
  if (params.searchTerm) {
    andConditions.push({
      OR: adminSearchableFileds?.map((field) => ({
        [field]: {
          contains: params.searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

  //filtering
  //convert to array
  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map((key) => ({
        [key]: {
          equals: filterData[key], // match exact search
        },
      })),
    });
  }
  //for those whose account is deleted not shown in the admin list
  andConditions.push({isDeleted:false})

  // console.dir(andConditions,{depth:'infinity'})
  const whereConditions: Prisma.AdminWhereInput = { AND: andConditions };

  const result = await prisma.admin.findMany({
    where: whereConditions,
    skip: skip, // how many data will be skip
    take: limit, // show how many data in per page
    orderBy:
      options.sortBy && options.sortOrder
        ? {
            // createdAt:'desc'       //asc
            [options.sortBy]: options.sortOrder,
          }
        : { createdAt: "desc" },
  });

  const total = await prisma.admin.count({ where: whereConditions });

  // return result;
  return {
    meta: { page, limit, total },
    data: result,
  };
};

const getAdminById = async (id: string):Promise<Admin | null> => {
  const data = await prisma.admin.findUnique({
    where: {
      id: id,
      isDeleted:false
    },
  });
  return data;
};

const updateAdminDB = async (id: string, updatedData: Partial<Admin>):Promise<Admin> => {
  console.log('checker...')
  await prisma.admin.findUniqueOrThrow({
    where: { id , isDeleted:false},
  });

  const result = await prisma.admin.update({
    where: {
      id: id,
    },
    data: updatedData,
  });

  return result;
};

const deleteAdminDB = async (id: string):Promise<Admin> => {
  const result = await prisma.$transaction(async (transactionClient) => {
    //handle if the id is wrong
    await prisma.admin.findUniqueOrThrow({
      where: { id },
    });

    //first delete from admin table
    const adminDeletedData = await prisma.admin.delete({
      where: {
        id: id,
      },
    });

    //then delete the userData based on fkey of email
     await prisma.user.delete({
      where: {
        email: adminDeletedData.email,
      },
    });

    return adminDeletedData;
  });

  return result;
};

const softDeleteFromDB = async (id: string): Promise<Admin | null> => {
    await prisma.admin.findUniqueOrThrow({
        where: {
            id,
            isDeleted: false
        }
    });

    const result = await prisma.$transaction(async (transactionClient) => {
        const adminDeletedData = await transactionClient.admin.update({
            where: {
                id
            },
            data: {
                isDeleted: true
            }
        });

       const userDeletedData = await transactionClient.user.update({
            where: {
                email: adminDeletedData.email
            },
            data: {
                status: UserStatus.DELETED
            }
        });

        return adminDeletedData;
    });

    return result;
}

export const adminService = {
  getAdmins,
  getAdminById,
  updateAdminDB,
  deleteAdminDB,
  softDeleteFromDB
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
