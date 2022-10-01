import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const connect_to_DB = () => {
  mongoose.connect(process.env.MONGO_URI)
};

export default connect_to_DB;
