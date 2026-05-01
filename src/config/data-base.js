import { mongoose } from "mongoose";


const mongoUri = `mongodb://localhost:27017/${process.env.MONGO_DB_NAME}`

//const mongoUri = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB_NAME}?authSource=admin${process.env.ENV.toLowerCase() !== 'local' ? '&replicaSet=rs0' : ''}`;

 const setupMongoServer = async () => {
  try {
    await mongoose.connect(mongoUri, process?.env?.ENV?.toLowerCase() === 'local' ? {
      serverSelectionTimeoutMS: 120000,
    } : null);
    console.info('Database connected successfully !!');
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export default setupMongoServer;

