import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import express from "express";



const app= express();

import farmerData from "./routes/farmerData.js";

app.use(bodyParser.json({limit:"30mb" ,extended: "true"}));
app.use(bodyParser.urlencoded({limit:"30mb" ,extended: "true"}));
app.use(cors());

app.use("/farmers",farmerData );
const CONNECT_URL="mongodb+srv://admin-mayank:123@cluster0.a6pem.mongodb.net/?retryWrites=true&w=majority"

const PORT = process.env.PORT || 1234;
mongoose.connect(CONNECT_URL)
.then(()=>app.listen(PORT,()=>console.log("connect succesful")))
.catch((error)=>{console.log(error.message)});
