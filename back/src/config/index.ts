import dotenv from "dotenv";

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}
process.env.NODE_ENV = process.env.NODE_ENV || "development";

export default {
  environment : process.env.NODE_ENV,
  port : process.env.DB_PORT,
  database : process.env.DATABASE,
  host : process.env.HOST,
  dbUsername : process.env.DB_USERNAME,
  dbPassword : process.env.PASSWORD
}