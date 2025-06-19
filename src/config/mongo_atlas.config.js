import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

class MongoConnection {
  constructor() {
    this.connection = null;
  }

  async connect() {
    if (this.connection) return this.connection;
    try {
      await mongoose.connect(process.env.MONGO_URI, { dbName: "ort-database" });
      this.connection = mongoose.connection;
      console.log("Mongo Atlas DB connected");
      return this.connection;
    } catch (e) {
      console.error("❌ Mongo Atlas connection failed");
      throw e;
    }
  }
}

const mongoConnectionInstance = new MongoConnection();
export default mongoConnectionInstance;
