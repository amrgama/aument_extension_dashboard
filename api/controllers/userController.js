import mongoose from "mongoose";
import User from "../models/user.js";
import { isValidObj } from "../util/helper.js";
import bcrypt from "bcrypt";
import BannedUser from "../models/bannedUser.js";
import DeletedUser from "../models/deletedUser.js";
import ApiError from "../error/ApiError.js";
import Company from "../models/company.js";
import ServerError from "../error/ServerError.js";

export const createNewUser = async (req, res, next)=> {
    const {companyName, username, password} = req.body;
    console.log("companyName: ", companyName, "username", username, "password", password);
    if(!companyName || !username || !password){
        next(ApiError.badRequestError("company name or username or password is required"));
        return;
    }

    if(companyName !== "yacpa"){
        return next(ApiError.badRequestError("Company name should be yacpa"));
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

export const getUsers = async (req, res)=>{

    try{
        const users = await User.find().exec();
        const bannedUsers = await BannedUser.find().populate("userId").exec();
        const deletedUsers = await DeletedUser.find().populate("userId").exec();
        
        // const senedData = {users: [], bannedUsers: [], deletedUsers: []};

        if(!!!users || !!!users.length){
            return res.status(200).json([]);
        }

        return res.status(200).json({users, bannedUsers, deletedUsers});
    }
    catch(err){
        
        if(!!!err.code || err.code === 500){
            next(ServerError.internalServerError());
            return;
        }       

        next(new ServerError(err.code, err.msg))
    }
}

export const getUserStatus = async(req, res, next)=>{
    // const {userId, username} = req.query;
    const {userId, username} = req.body;
    // let searchBy = userId ?? userName;
    // let searchByName = userId? "userId": "userName";

    console.log("in get user status", "userId: ", userId, "username: ", username);

    const foundedUser = (userId)? 
                            await User.findById(userId).exec()
                        : 
                            await User.findOne({username}).exec();

    if(!!!foundedUser) return next(ApiError.badRequestError("user id didn't found"));

    if(foundedUser._doc.status === "allowed"){
        return res.status(200).json({status: "allowed"})

    }
    else if(foundedUser._doc.status === "banned"){

        const foundedBannedUser= await BannedUser.findOne({userId}).exec();
        if(!!foundedBannedUser) return res.status(200).json({status: "banned", period: foundedBannedUser._doc.period, message: `You have been banned for ${foundedBannedUser._doc.period}`})
    }
    else if(foundedUser._doc.status === "deleted"){

        const foundedDeletedUser= await DeletedUser.findOne({userId}).exec();
        if(!!foundedDeletedUser) return res.status(200).json({status: "deleted", canReadded: true, message: `You have been deleted, but you can still get back call the support`})
        if(!!!foundedDeletedUser) return res.status(200).json({status: "deleted", canReadded: false, message: `You have been deleted`})
    }

    
}
// export default {getUsers};