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

    // 5. show error if not matched this will fix the issue of not sending access token if password is incorrect
    if(!isCorrectPassword){
        throw new Error("Password is not correct")
    }

    //3. next make jwt token: what types of things i want to store
    const accessToken =jwt.sign({
        email:userData.email,
        role:userData.role
    },'secretkey',{
        algorithm:"HS256",
        expiresIn:"30m"
    });

    // return userData;

    //4. now update which data we send as response
    return{
        accessToken,
        needPasswordChange :userData.needPasswordChange
    }
};


export const AuthService ={
    loginUser
}