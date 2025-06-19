import dotenv from "dotenv";

dotenv.config();

export const config = {
  PORT: process.env.PORT,
  HOST: process.env.HOST,
  MONGO_URI: process.env.MONGO_URI,
};