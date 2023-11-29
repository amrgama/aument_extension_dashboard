import jwt from "jsonwebtoken";
import ApiError from "../error/ApiError.js";
import Admin from "../models/admin.js";
import ServerError from "../error/ServerError.js";

const isAdmin = async (req, res, next)=> {

    const {_id: adminId} = res.locals.decodedAccessToken;
    try{
        
        const foundedAdmin = await Admin.findById(adminId).exec();

        if(!!!foundedAdmin) {
            return next(new ApiError(401, "You have not access to create user"))
        }

        next();
    }
    catch(err){
        
        if(!!!err.code || err.code === 500){
            next(ServerError.internalServerError());
            return;
        }       

        next(new ServerError(err.code, err.msg))
    }
}

export default isAdmin;