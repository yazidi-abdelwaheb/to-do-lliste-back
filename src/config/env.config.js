import dotenv from "dotenv";
dotenv.config();

const ENV = process.env.ENV;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const PORT = process.env.PORT;
const VERSION = process.env.VERSION;

const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_PORT = process.env.MONGO_PORT;
const MONGO_HOST = process.env.MONGO_HOST;
const MONGO_DB_NAME = process.env.MONGO_DB_NAME;

const URL_FRONT = process.env.URL_FRONT;
const PROTOCOL_FRONT = process.env.PROTOCOL_FRONT;

const EMAIL_HOST = process.env.EMAIL_HOST;
const EMAIL_PORT = process.env.EMAIL_PORT;
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

export {
  ENV,
  PRIVATE_KEY,
  PORT,
  VERSION,
  MONGO_HOST,
  MONGO_PASSWORD,
  MONGO_PORT,
  MONGO_USERNAME,
  MONGO_DB_NAME,
  URL_FRONT,
  PROTOCOL_FRONT,
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_USER,
  EMAIL_PASS,
};
