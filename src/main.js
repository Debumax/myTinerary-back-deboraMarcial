import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import './database/db.js'


import citie from './routers/citie.js'; 

////////////////////
//config de variables de entorno
dotenv.config();
////////////////////
const app= express();
app.use(cors());

// settings 
app.set("PORT",process.env.PORT) ;

//middlewares
app.use(morgan("dev")); // permite en la consola ver las peticiones y resp 
app.use(express.json({ limit: '50mb'}));
//app.use(express.urlencoded({limit: '25mb', extended: true}));


//rutas

app.use("/api/Citie",citie);

app.use("*", (req, res) => {
    const err = Error(`Requested path ${req.baseUrl} not found`);
    res.status(404).send({
    success: false,
    message: `el path ${req.baseUrl} no funciona`,
    stack: err.stack,
    });
  
    });


export default app

