import jwt  from 'jsonwebtoken';
import { Secret, SignOptions } from 'jsonwebtoken'; 

const generateToken = (
  userData: object, 
  secretkey: string, 
  expiresIn: string
) => {
  const token = jwt.sign(
    userData,
    secretkey,
    {
      algorithm: "HS256",
      expiresIn
    } as SignOptions 
  );

  return token;
};


export const jwtHelpers={generateToken}




//todo:3. next make jwt token: what types of things i want to store
// const accessToken__NotUsed = jwt.sign(
//   {
//     email: userData.email,
//     role: userData.role,
//   },
//   "secretkey",
//   {
//     algorithm: "HS256",
//     expiresIn: "30m",
//   }
// );

//todo: 6. crate refresh token and set it as httpOnly means(keep this in cookies)
// const refreshToken__NotUsed = jwt.sign(
//   {
//     email: userData.email,
//     role: userData.role,
//   },
//   "secretkey2",
//   {
//     algorithm: "HS256",
//     expiresIn: "90d",
//   }
// );
