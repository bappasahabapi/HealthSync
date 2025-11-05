import jwt, { JwtPayload } from "jsonwebtoken";
import { prisma } from "../../../shared/prisma";
import * as bcyrpt from "bcrypt";
import { jwtHelpers } from "../../../helper/jwtHelpers";
// import jwt from "jsonwebtoken";

type TloginData = {
  email: string;
  password: string;
};
const loginUser = async (data: TloginData) => {
  //1. take the payload as  data
  const userData = await prisma.user.findUniqueOrThrow({
    where: {
      email: data.email,
    },
  });

  //2. check data.pass with userData.pass which is in  database stored data
  const isCorrectPassword: boolean = await bcyrpt.compare(
    data.password,
    userData.password
  );

  // 5. show error if not matched this will fix the issue of not sending access token if password is incorrect
  if (!isCorrectPassword) {
    throw new Error("Password is not correct");
  }

  //3. next make jwt token: what types of things i want to store
  const accessToken = jwtHelpers.generateToken(
    { email: userData.email, role: userData.role },
    "secretkey",
    "30m"
  );

  // 6. crate refresh token and set it as httpOnly means(keep this in cookies)
  const refreshToken = jwtHelpers.generateToken(
    { email: userData.email, role: userData.role },
    "secretkey2",
    "30m"
  );

  //7. set refresh token in cookies from controller

  //4. now update which data we send as response
  return {
    accessToken,
    refreshToken,
    needPasswordChange: userData.needPasswordChange,
  };
};

//todo:for creating access token from refresh token
const refreshToken = async(token: string) => {
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, "secretkey2") as JwtPayload;
    console.log(decodedToken);
  } catch (error) {
    throw new Error("You are not authorized! login first");
  }


  const userData =await prisma.user.findFirstOrThrow({
    where:{
        email:decodedToken?.email 
    }
  });

  const accessToken = jwtHelpers.generateToken(
    { email: userData?.email, role: userData.role },
    "secretkey",
    "30m"
  );

  return {
    accessToken,
    needPasswordChange: userData.needPasswordChange,
  };
};

export const AuthService = {
  loginUser,
  refreshToken,
};
