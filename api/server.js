import dotenv from "dotenv";
dotenv.config();

import path from "path";
import {fileURLToPath} from "url";
import express from "express";
import mongoose from "mongoose";
import dbConn from "./config/dbConn.js";
import cookieParser from "cookie-parser";
import cors from "cors"
import credentials from "./middleware/credentials.js";
import corsOptions from "./config/corsOptions.js";
import { apiErrorHandler, serverErrorHandler } from "./middleware/errorHandler.js";
import adminRouter from "./router/adminRouter.js";
import authRouter from "./router/authRouter.js";
import fileController from "./controllers/fileController.js";
import registerRouter from "./router/registerRouter.js";
import userRouter from "./router/userRouter.js";
import companyRouter from "./router/companyRouter.js"
import isAuth from "./middleware/isAuth.js";
import verfiyJWT, { verfiyJWTForUser } from "./middleware/verifyJWT.js";
import refreshRouter from "./router/refreshRouter.js";
import privateRouter from "./router/privateRouter.js";
import { isBannedUser } from "./middleware/isBanned.js";

const app = express();

// puplic middleware
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/private/:accessToken",[verfiyJWTForUser, isBannedUser], express.static(path.join(__dirname, "/public")));

// top level middilwares
app.use(credentials);
app.use(cors(corsOptions));
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cookieParser())
// app.use(cors());


// app.use((req, res, next) => {
//     res.setHeader('Content-Security-Policy', "script-src 'chrome-extension://ifenahlinalcgggnfodahbckfhhlmnpd'");
//     return next();
// });

// app.get("/accessToken/content.js", (req, res, next)=>{
    //     res.setHeader('Content-Security-Policy', "script-src chrome-extension://ifenahlinalcgggnfodahbckfhhlmnpd  http://localhost:3500 'unsafe-inline'");
    //     res.setHeader('Cache-Control', 'no-cache')
    //     .sendFile(path.join(__dirname, "/public/content.js"));
    // })
    
    
// connect to mongoDB
dbConn();

// admin router
app.use("/admin", adminRouter);
    
// company router
app.use("/companies", companyRouter)
// personal router

// user router
app.use("/users", userRouter);


// app.get("/api/content", fileController.sendFile);
// middleware handle 404 page respons

// refresh router
app.use("/refresh", isAuth, refreshRouter);

app.all("*", (req, res)=> {
    res.status(404).json({errorMsg: "not found"});
});

// handle errors middleware
app.use(apiErrorHandler, serverErrorHandler);

let temp_port = undefined;
if(process.env.DEVELOPMENT_MODE && !process.env.PRODUCTION_MODE){
    temp_port = process.env.DEVELOPMENT_PORT;
}
else{
    temp_port = process.env.PRODUCTION_PORT;
}

const port = temp_port;
mongoose.connection.once("open", ()=>{
    console.log("connected to MongoBB successfully")
    app.listen(port, ()=>{
        console.log("server run successfully")
    })
})