require('dotenv').config();

const mongoose=require('mongoose');

const connectionString=process.env.MONGO_URI;

const connectMongoDB=async()=>{
    try{
        await mongoose.connect(connectionString);
        console.log("Successfully connected to MongoDB");
    }
    catch(e){
        console.error("ERROR in connecting with MongoDB"+e.message);
        process.exit(1);
    }
}

module.exports=connectMongoDB