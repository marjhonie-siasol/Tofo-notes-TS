import dotenv from 'dotenv';
import mongoose from "mongoose";

dotenv.config();

mongoose.set('strictQuery', true);
mongoose.connect("");             

db.on("error", ()=> console.log("DB Connection Error"));
db.once("open", ()=>{console.log("DB Connected");
});

export default db;



