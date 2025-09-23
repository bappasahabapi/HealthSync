import { log } from "console"
// import { UserRole } from "@prisma/client" //this is used in old version of prisma
import { Prisma, PrismaClient, UserRole } from "../../../generated/prisma"

const prisma =new PrismaClient();


const createAdmin =async(data:any)=>{
    // console.log({data});
    const userData ={
        email:data?.admin?.email,
        password:data?.password,
        role:UserRole.ADMIN
        
    }

    const result =await prisma.$transaction(async(transactionClient)=>{

        //first create the user
        // const createdUserData =await transactionClient.user.create({
        //     data:userData
        // })

        //As createUserData is not used to show thats why we just store the data
        await transactionClient.user.create({
            data:userData
        })


        //second create the admin thats why we need transaction.
        const createdAdminData =await transactionClient.admin.create({
            data:data.admin
        })

        return createdAdminData
    })

    return result;
    
}

export const userService={createAdmin}



// {
//   data: {
//     password: '123456',
//     admin: {
//       name: 'admin',
//       email: 'admin@gmail.com',
//       contactNumber: '012345678911'
//     }
//   }
// }