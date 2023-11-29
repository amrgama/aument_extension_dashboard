import User from "../models/user.js";
import Company from "../models/company.js";
import DeletedCompany from "../models/deletedCompany.js";
import BannedCompany from "../models/bannedCompany.js";
import DeletedUser from "../models/deletedUser.js";
import BannedUser from "../models/bannedUser.js";
import ApiError from "../error/ApiError.js";

export const deleteUser = async(req, res, next)=>{
    const {userId} = req.body;
    if(!!!userId) return next(ApiError.badRequestError("user id is required"));

    try{
        const foundedUser = await User.findById(userId).exec();
        if(!!!foundedUser) return next(new ApiError(404, `There is not user with ${userId} id`));
        foundedUser.status = "deleted";
        foundedUser.save();

        await BannedUser.deleteOne({userId: foundedUser._id});
        const deletedUser = await DeletedUser.create({userId: foundedUser._id});
        await deletedUser.populate("userId");
        res.status(200).json(deletedUser);
    }
    catch(err){
        console.log("server error in delete user: ", err)
        if(!!!err.code || err.code === 500){
            next(ServerError.internalServerError());
            return;
        }       

        next(new ServerError(err.code, err.msg))
    }
}

export const banUser = async(req, res, next)=>{
    const {userId, period} = req.body;
    if(!!!userId || !!!period) {
        return next(ApiError.badRequestError("user id or ban period is required"));
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
        const foundedUser = await User.findById(userId).exec();
        if(!!!foundedUser) return next(new ApiError(404, `There is not user with ${userId} id`));
        foundedUser.status = "banned";
        foundedUser.save();

        const bannedUser = await BannedUser.create({userId: foundedUser._id, period});
        // const bannedUsers = await BannedUser.find().populate("userId").exec();
        // console.log("bannedUsers: ", bannedUsers)
        await bannedUser.populate("userId");
        res.status(200).json(bannedUser);
    }
    catch(err){
        console.log("server error in ban user: ", err)
        if(!!!err.code || err.code === 500){
            next(ServerError.internalServerError());
            return;
        }       

        next(new ServerError(err.code, err.msg))
    }
}
// export const unDeleteUser = async(req, res, next)=>{
//     const {userId} = req.body;
//     if(!!!userId) {
//         return next(ApiError.badRequestError("user id is required"));
//     }

//     try{
//         const foundedBannedUser = await BannedUser.findById(userId).populate("userId", "-password -refreshToken").exec();
//         if(!!!foundedBannedUser) return next(new ApiError(404, `There is not banned user with ${userId} id`));
//         foundedBannedUser.userId.status = "allowed";
//         foundedBannedUser.userId.save();
//         foundedBannedUser.save();

//         res.status(200).json({"message": "User unbanned successfully"});
//     }
//     catch(err){
//         console.log("server error in unban user: ", err)
//         if(!!!err.code || err.code === 500){
//             next(ServerError.internalServerError());
//             return;
//         }       

//         next(new ServerError(err.code, err.msg))
//     }
// }

export const unbanUser = async(req, res, next)=>{
    const {userId} = req.body;
    if(!!!userId) {
        return next(ApiError.badRequestError("user id is required"));
    }

    try{
        const foundedBannedUser = await BannedUser.findOneAndDelete({userId}).populate("userId", "-password -refreshToken");
        console.log("foundedBannedUser", foundedBannedUser);
        if(!!!foundedBannedUser) return next(new ApiError(404, `There is not banned user with ${userId} id`));
        foundedBannedUser.userId.status = "allowed";
        await foundedBannedUser.userId.save();
        
        // foundedBannedUser.remove();
        
        res.status(200).json(foundedBannedUser);
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