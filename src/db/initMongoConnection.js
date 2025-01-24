import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const user = process.env.MONGODB_USER;
const pwd = process.env.MONGODB_PASSWORD;
const url = process.env.MONGODB_URL;
const db = process.env.MONGODB_DB;

async function initDBConnection() {
  try {
    await mongoose.connect(
      'mongodb+srv://VOVA:<Hppgjsd67xbr>@cluster0.pbp0x.mongodb.net/movies?retryWrites=true&w=majority&appName=Cluster0',
    );

    console.log('Mongo connection successfully establish!');
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export { initDBConnection };
