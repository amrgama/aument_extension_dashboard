import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

let temp_db_uri = undefined;

if(process.env.DEVELOPMENT_MODE && !process.env.PRODUCTION_MODE){
    temp_db_uri = process.env.DEVELOPMENT_DB_URI;
}
else{
    temp_db_uri = process.env.PRODUCTION_DB_URI;
}

console.log(`${temp_db_uri}`);
const db_uri = `${temp_db_uri}`; 
const dbConn = async()=>{
    try{
        await mongoose.connect(db_uri, {
            UseUnifiedTopology: true,
            UseNewUrlParser: true
        })
    }
    catch(err){
        console.log("connection error: ", err)
    }
}

export default dbConn;