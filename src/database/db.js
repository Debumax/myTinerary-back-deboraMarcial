import mongoose from 'mongoose';
import  dotenv from 'dotenv';
dotenv.config();


mongoose.connect(process.env['BD_URL'])
.then( ()=>{
    console.log("bd conectada");
})
.catch(()=>{
    console.log("fallo conexion de bd");
})