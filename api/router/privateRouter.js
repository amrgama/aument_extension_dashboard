import path from "path";
import {fileURLToPath} from "url";
import verfiyJWT, { verfiyJWTForUser } from "../middleware/verifyJWT.js";
import isAuth from "../middleware/isAuth.js";
import express from "express";
import ServerError from "../error/ServerError.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const privateRouter = express.Router();
privateRouter
.get("/script", verfiyJWT, (req, res, next)=>{

    try{
        // chrome-extension://ifenahlinalcgggnfodahbckfhhlmnpd http://127.0.0.1:*  http://localhost:3500 'nonce-i2726c7f26b' 
        res.header("Access-Control-Allow-Origin", req.header('origin'));
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Credentials","true");
        res.setHeader('Cache-Control', 'no-cache');
        // res.setHeader('Content-Security-Policy-Report-Only', "script-src 'unsafe-inline' 'wasm-unsafe-eval' 'inline-speculation-rules' 'sha256-COsHuslljDGeBkdn7tE/8hIG1nfxXyjI8M+5SJ7Ovtg='");
        // 'wasm-unsafe-eval' 'inline-speculation-rules' 'sha256-COsHuslljDGeBkdn7tE/8hIG1nfxXyjI8M+5SJ7Ovtg='
        res.setHeader('Content-Security-Policy', "script-src http://localhost:* http://127.0.0.1:* 'self' 'unsafe-inline'");
        res.setHeader('Content-Type', 'application/javascript')
        console.log("privatePath: ", path.join(__dirname, "../private/script.js"));
        res.sendFile(path.join(__dirname, "../private/script.js"));
    }
    catch(err){
        if(!!!err.code || err.code === 500){
            next(ServerError.internalServerError());
            return;
        }       

        next(new ServerError(err.code, err.msg))
    }
})
.get("/:accessToken", verfiyJWTForUser, express.static(path.join(__dirname, "../private")))

export default privateRouter;