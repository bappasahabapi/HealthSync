import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.join(process.cwd(), ".env"),
});

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  jwt: {
    jwt_secret: process.env.JWT_SECRET,
    jwt_expire_in: process.env.JWT_SECRET_EXPIRE_IN,
    refresh_token: process.env.REFRESH_TOKEN,
    refresh_token_expire_in: process.env.REFRESH_TOKEN_EXPIRE_IN,
  },
  // env:process.env.DATABASE_URL="postgresql://postgres:postgres@localhost:5432/health_sync_db?schema=public"
  // env:process.env.JWT_SECRET="secretkey"
  // env:process.env.JWT_SECRET_EXPIRE_IN="30m"
  // env:process.env.REFRESH_TOKEN="secretkey2"
  // env:process.env.REFRESH_TOKEN_EXPIRE_IN="60m"
};
