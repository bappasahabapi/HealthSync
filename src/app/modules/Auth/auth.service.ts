import { prisma } from "../../../shared/prisma";
import * as bcyrpt from 'bcrypt'
import jwt  from 'jsonwebtoken';

type TloginData={
    email:string;
    password:string
}
const loginUser =async(data:TloginData)=>{

    //1. take the payload as  data
    const userData =await prisma.user.findUniqueOrThrow({
        where:{
            email:data.email
        }
    });

    //2. check data.pass with userData.pass which is in  database stored data
    const isCorrectPassword:boolean=await bcyrpt.compare(data.password,userData.password);

    //3. next make jwt token: what types of things i want to store
    const accessToken =jwt.sign({
        email:userData.email,
        role:userData.role
    },'secretkey',{
        algorithm:"HS256",
        expiresIn:"30m"
    });

    console.log(accessToken)



    
    return userData;
};


export const AuthService ={
    loginUser
}