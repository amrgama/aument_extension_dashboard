import Company from "../models/company.js";
import BannedCompany from "../models/bannedCompany.js";
import DeletedCompany from "../models/deletedCompany.js";
import ServerError from "../error/ServerError.js";
import ApiError from "../error/ApiError.js";
import bcrypt from "bcrypt";

export const createNewCompany = async (req, res, next)=> {
    const {companyName, email, password} = req.body;
    console.log("companyName: ", companyName, "email", email, "password", password);
    // if(!companyName || companyName !== "yacpa" || !email || !password){
    if(!companyName || !email || !password){
        next(ApiError.badRequestError("require email data"));
        return;
    }

    try{

        const dplCompany = await Company.findOne({companyName})
        if(dplCompany) {
            next(new ApiError(409, "Company repeated data"));
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const newCompany = await Company.create({
            vector: Date.now().toString(),
            companyName,
            email,
            "password" : hashedPassword
        });

        res.status(201).json(newCompany);
    }
    catch(err){
        console.log("error in serverError", err);
        if(!!!err.code || err.code === 500){
            next(ServerError.internalServerError());
            return;
        }       

        next(new ServerError(err.code, err.msg))
    }
}

export const getAllCompanies = async (req, res)=>{

    try{
        const companies = await Company.find().exec();
        const bannedCompanies = await BannedCompany.find().populate("companyId").exec();
        const deletedCompanies = await DeletedCompany.find().populate("companyId").exec();

        if(!!!companies || !!!companies.length){
            return res.status(200).json({allCompanies: [], bannedCompanies: [], deletedCompanies: []});
        }

        return res.status(200).json({all: companies, banned: bannedCompanies, deleted: deletedCompanies});
    }
    catch(err){
        
        if(!!!err.code || err.code === 500){
            next(ServerError.internalServerError());
            return;
        }       

        next(new ServerError(err.code, err.msg))
    }
}

export const deleteCompany = async(req, res, next)=>{
    const {companyId} = req.body;
    if(!!!companyId) return next(ApiError.badRequestError("company id is required"));

    try{
        const foundedCompany = await Company.findById(companyId).exec();
        if(!!!foundedCompany) return next(new ApiError(404, `There is not company with ${companyId} id`));
        foundedCompany.status = "deleted";
        foundedCompany.save();
        
        await BannedCompany.deleteOne({companyId: foundedCompany._id});
        const deletedCompany = await DeletedCompany.create({companyId: foundedCompany._id});
        await deletedCompany.populate("companyId");
        
        res.status(200).json(deletedCompany);
    }
    catch(err){
        console.log("server error in delete company: ", err)
        if(!!!err.code || err.code === 500){
            next(ServerError.internalServerError());
            return;
        }       

        next(new ServerError(err.code, err.msg))
    }
}

export const undeleteCompany = async(req, res, next)=>{
    const {companyId} = req.body;
    if(!!!companyId) {
        return next(ApiError.badRequestError("company id is required"));
    }

    try{
        const foundedDeletedCompany = await DeletedCompany.findOneAndDelete({companyId}).populate("companyId", "-password -refreshToken");
        console.log("foundedDeletedCompany", foundedDeletedCompany);
        if(!!!foundedDeletedCompany) return next(new ApiError(404, `There is not banned company with ${companyId} id`));
        foundedDeletedCompany.companyId.status = "allowed";
        await foundedDeletedCompany.companyId.save();
        
        // foundedBannedUser.remove();
        
        res.status(200).json(foundedDeletedCompany);
    }
    catch(err){
        console.log("server error in undelete user: ", err)
        if(!!!err.code || err.code === 500){
            next(ServerError.internalServerError());
            return;
        }       

        next(new ServerError(err.code, err.msg))
    }
}

export const banCompany = async(req, res, next)=>{
    const {companyId, period} = req.body;
    if(!!!companyId || !!!period) {
        return next(ApiError.badRequestError("company id or ban period is required"));
    }

    switch(period){
        case "7d":
        case "30d":
        case "byMe":
            break;
        default: {
            return next(ApiError.badRequestError("not valid value or ban period"));
        }
    }

    try{
        const foundedCompany = await Company.findById(companyId).exec();
        if(!!!foundedCompany) return next(new ApiError(404, `There is not company with ${companyId} id`));
        foundedCompany.status = "banned";
        foundedCompany.save();

        const bannedCompany = await BannedCompany.create({companyId: foundedCompany._id, period});
        // const bannedUsers = await BannedUser.find().populate("userId").exec();
        // console.log("bannedUsers: ", bannedUsers)
        await bannedCompany.populate("companyId");
        res.status(200).json(bannedCompany);
    }
    catch(err){
        console.log("server error in ban company: ", err)
        if(!!!err.code || err.code === 500){
            next(ServerError.internalServerError());
            return;
        }       

        next(new ServerError(err.code, err.msg))
    }
}

export const unbanCompany = async(req, res, next)=>{
    const {companyId} = req.body;
    if(!!!companyId) {
        return next(ApiError.badRequestError("company id is required"));
    }

    try{
        const foundedBannedCompany = await BannedCompany.findOneAndDelete({companyId}).populate("companyId", "-password -refreshToken");
        console.log("foundedBannedCompany", foundedBannedCompany);
        if(!!!foundedBannedCompany) return next(new ApiError(404, `There is not banned company with ${companyId} id`));
        foundedBannedCompany.companyId.status = "allowed";
        await foundedBannedCompany.companyId.save();
        
        // foundedBannedUser.remove();
        
        res.status(200).json(foundedBannedCompany);
    }
    catch(err){
        console.log("server error in unban user: ", err)
        if(!!!err.code || err.code === 500){
            next(ServerError.internalServerError());
            return;
        }       

        next(new ServerError(err.code, err.msg))
    }
}