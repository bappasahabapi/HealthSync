import jwt, { Secret, SignOptions,JwtPayload } from 'jsonwebtoken'; 

const generateToken = (
  userData: object, 
  secretkey: Secret, 
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

const varifyToken =(token:string, secretkey:Secret)=>{
  return jwt.verify(token, secretkey) as JwtPayload;
};


export const jwtHelpers={generateToken,varifyToken}




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
