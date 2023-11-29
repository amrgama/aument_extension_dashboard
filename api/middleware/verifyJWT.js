import jwt from "jsonwebtoken";
import ApiError from "../error/ApiError.js";

const verfiyJWT = (req, res, next)=> {
    const authHeader = req.headers["authorization"];
    console.log("authheader", authHeader);

    if(!authHeader){
        return next(ApiError.unauthorizedRequestError());
    }

    const accessToken = authHeader.split(" ")[1];
    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRETE, (err, decoded)=>{
        if(err) {
            return next(ApiError.forbiddenRequestError())
        }

        res.locals.decodedAccessToken = decoded;
        next()
    })
}

export const verfiyJWTForUser = (req, res, next)=> {

    const accessToken = req.params.accessToken;
    console.log("accessToken", accessToken);
    if(!!!accessToken){
        return next(ApiError.unauthorizedRequestError());
    }

    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRETE, (err, decoded)=>{
        
        if(err) return next(ApiError.forbiddenRequestError());
        res.locals.decodedAccessToken = {...decoded};
        next()
    })
}

export default verfiyJWT;