import { mongoose } from "mongoose";
import {
  ENV,
  MONGO_DB_NAME,
  MONGO_HOST,
  MONGO_PASSWORD,
  MONGO_PORT,
  MONGO_USERNAME,
} from "./env.config.js";

const mongoURI =
  ENV === "LOCAL"
    ? `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DB_NAME}?authSource=admin`
    : `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB_NAME}`;

const setupMongoServer = async () => {
  try {
    await mongoose.connect(
      mongoURI,
      ENV === "LOCAL"
        ? {
            serverSelectionTimeoutMS: 120000,
          }
        : null,
    );
    console.info("Database connected successfully !!");
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export default setupMongoServer;
