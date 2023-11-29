import User from "../models/user.js";
import BannedUser from "../models/bannedUser.js";
import ApiError from "../error/ApiError.js";

export async function isBannedUser(req, res, next){

    const {id: userId, status}= res.locals.decodedAccessToken;
    console.log("decodedAccessToken", res.locals.decodedAccessToken);
    if(status === "banned"){
        
        const foundedBannedUser = await BannedUser.findOne({userId}).exec();
        if(!!!foundedBannedUser){

            const foundedUser = await User.findById(userId).exec();
            if(!!foundedUser){
                
                foundedUser.status= "allowed";
                await foundedUser.save();
                return next();
            }
        }
        
        return next(ApiError.forbiddenRequestError(`You have been banned for ${foundedBannedUser.period}`))
    }
    else{
        next();
    }
}