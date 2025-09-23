import {PrismaClient } from "../../../generated/prisma"

  
const prisma =new PrismaClient()

const getAdmins =async()=>{
    const result =await prisma.admin.findMany();
    return result;
}


export const adminService ={
    getAdmins
}