import User from "../models/user.js";
// import Company from "../models/company.js";
import Admin from "../models/admin.js";
import bcrypt from "bcrypt";
import helper from "../util/helper.js";
import ApiError from "../error/ApiError.js";
import ServerError from "../error/ServerError.js";
import Company from "../models/company.js";

export const createNewUser = async (req, res, next)=> {
    const {companyName, username, password} = req.body;
    console.log("companyName: ", companyName, "username", username, "password", password);
    if(!companyName || companyName !== "yacpa" || !username || !password){
        next(ApiError.badRequestError("require user data"));
        return;
    }

    try{
        const foundedCompany = await Company.findOne({companyName}).exec();
        if(!!!foundedCompany) return next(new ApiError(404, "Company name is not found"))

        const dplUser = await User.findOne({username})
        if(dplUser) {
            next(new ApiError(409, "user repeated data"));
            return;
        }

        // const generatedUsername = helper.generate_unique_username(`@${companyName}`);
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = await User.create({
            companyName,
            username,
            "password" : hashedPassword
        });

        res.status(201).json(newUser);
    }
    catch(err){
        if(!!!err.code || err.code === 500){
            next(ServerError.internalServerError());
            return;
        }       

        next(new ServerError(err.code, err.msg))
    }
}

export const createAdmin = async (req, res, next)=> {
    
    console.log("in create admin");
    const {fullName, username, email, password} = req.body;
    console.log("body", req.body);
    if(!fullName || !email || !password){
        next(ApiError.badRequestError("require admin data"));
        return;
    }

    try{
        const dplAdmin = await Admin.findOne({email})
        if(dplAdmin) return next(new ApiError(409, "admin repeated data"));

        const generatedUsername = helper.generate_unique_username(`@${fullName}`);
        const hashedPassword = await bcrypt.hash(password, 12);
        const newAdmin = Admin.create({
            fullName,
            "username": username? username : generatedUsername,
            email,
            "password" : hashedPassword
        });

        console.log("in create admin");
        res.status(201).json({"success": `new admin account created successfully`})
    }
    catch(err){
        if(!!!err.code || err.code === 500){
            console.log("err", err);
            next(ServerError.internalServerError());
            return;
        }       
        console.log("errafter : ", err);
        next(new ServerError(err.code, err.msg))
    }
}
