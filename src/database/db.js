import mongoose from 'mongoose';
import  dotenv from 'dotenv';
dotenv.config();


mongoose.connect("mongodb+srv://DebumaxMDB:debumaxmdb@cluster0.dqyhyno.mongodb.net/myTinerary")
.then( ()=>{
    console.log("bd conectada");
})
.catch(()=>{
    console.log("fallo conexion de bd");
})