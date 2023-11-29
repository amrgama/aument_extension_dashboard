import User from "../models/user.js";
import Company from "../models/company.js";
import Admin from "../models/admin.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import ApiError from "../error/ApiError.js";
import ServerError from "../error/ServerError.js";
import BannedUser from "../models/bannedUser.js";
import DeletedUser from "../models/deletedUser.js";
import { writeBannedUserMsg, writeDeletedUserMsg } from "../util/helper.js";

// const handleUserLogIn = async (req, res)=> {
//     const {email, password} = req.body;
//     if(!email || !password){
//         return res.status(400).json({error: "user email and user passowrd are required"})
//     }

//     try{
//         const foundUser = await User.findOne({email})
//         if(!foundUser) return res.sendStatus(401)
        
//         const pwdMatched = await bcrypt.compare(password, foundUser.password)
//         console.log("matched", pwdMatched)
//         if(pwdMatched){
    
//             const accessToken = jwt.sign({userId: foundUser._id}, process.env.ACCESS_TOKEN_SECRETE, {expiresIn: "2m"})
//             const refreshToken = jwt.sign({userId: foundUser._id}, process.env.REFRESH_TOKEN_SECRETE, {expiresIn: "1d"})
            
//             const user = await User.findOne({_id: foundUser._id})
//             user.refreshToken = refreshToken
//             const updatedUser = await user.save()
//             console.log("updatedUser", updatedUser)
            
//             res.cookie("jwt", refreshToken, {httpOnly: true, sameSite: "None", secure: true, maxAge: 24 * 60 * 60 * 1000})
//             // res.cookie("jwt", refreshToken, {httpOnly: true, maxAge: 24 * 60 * 60 * 1000})
//             const {_id, firstName, lastName, username, email} = updatedUser
//             res.status(200).json({id: _id, firstName, lastName, username, email, accessToken})
//         } 
//         else{
//             return res.sendStatus(401)
//         }
//     }
//     catch(err){
//         if(!!!err.code || err.code === 500){
//             next(ServerError.internalServerError());
//             return;
//         }       

//         next(new ServerError(err.code, err.msg))
//     }
// }

// const handleUserLogOut = async (req, res)=> {
//     const cookies = req.cookies;
//     // console.log("cookie", cookies)

//     if(!cookies?.jwt) {
//         return res.sendStatus(204);
//     }
//     const refreshToken = cookies.jwt;

//     try{
//         const foundUser = await User.findOne({refreshToken})
//         if(!foundUser) {
//             res.clearCookie("jwt", {httpOnly: true, sameSite: "None", secure: true});
//             return res.sendStatus(204);
//         }
        
//         const updatedUser = await User.updateOne({refreshToken}, {refreshToken: ""})

//         res.clearCookie("jwt", {httpOnly: true, sameSite: "None", secure: true});
//         // res.cookie("jwt", refreshToken, {httpOnly: true})
//         res.sendStatus(204)
//         // console.log("updatedUser: ", updatedUser, "users: ", otherUsers)
//     }
//     catch(err){
//         if(!!!err.code || err.code === 500){
//             next(ServerError.internalServerError());
//             return;
//         }       

//         next(new ServerError(err.code, err.msg))
//     }
// }

export const handleAdminLogIn = async (req, res, next)=> {
    const {username, email, password} = req.body;
    console.log("login data", username, email, password);

    if((!username && !email) || !password){
        console.log("afterlogin data", username, email, password);
        next(ApiError.badRequestError("user email and user passowrd are required"));
        return;
    }

    try{

        const searchBy = (username && !!!email)? {username} : {email} 
        const foundedAdmin = await Admin.findOne(searchBy);
        
        if(!foundedAdmin) return next(ApiError.unauthorizedRequestError());
        console.log("foundedAdmin", foundedAdmin);
      
        const pwdMatched = await bcrypt.compare(password, foundedAdmin.password)
        console.log("matched", pwdMatched)
      
        if(pwdMatched){
    
            const accessToken = jwt.sign({adminId: foundedAdmin._id}, process.env.ACCESS_TOKEN_SECRETE, {expiresIn: "2m"})
            const refreshToken = jwt.sign({adminId: foundedAdmin._id}, process.env.REFRESH_TOKEN_SECRETE, {expiresIn: "1d"})
            
            foundedAdmin.refreshToken = refreshToken
            const updatedAdmin = await foundedAdmin.save()
            console.log("updatedAdmin", updatedAdmin)
            
            res.cookie("jwt", refreshToken, {httpOnly: true, sameSite: "None", secure: true, maxAge: 24 * 60 * 60 * 1000})
            // res.cookie("jwt", refreshToken, {httpOnly: true, maxAge: 24 * 60 * 60 * 1000})
            const {_id, fullName, username, email} = updatedAdmin
            res.status(200).json({id: _id, fullName, username, email, accessToken})
        } 
        else{
            return next(ApiError.unauthorizedRequestError());
        }
    }
    catch(err){
        console.log("server error in login: ", err)
        if(!!!err.code || err.code === 500){
            next(ServerError.internalServerError());
            return;
        }       

        next(new ServerError(err.code, err.msg))
    }
}

export const handleAdminLogOut = async (req, res, next)=> {
    const decodedToken = res.local.decodedToken;

    try{
        const foundedAdmin = await Admin.findById(decodedToken.adminId);
        if(!foundedAdmin) {
            res.clearCookie("jwt", {httpOnly: true, sameSite: "None", secure: true});
            return next(new ApiError(404, "not found this admin account"));
        }
       
        foundedAdmin.refreshToken = "";
        foundedAdmin.save();
        // const updatedAdmin = await Admin.updateOne({_id: decodedToken.adminId}, {refreshToken: ""})
        res.clearCookie("jwt", {httpOnly: true, sameSite: "None", secure: true});
        // res.cookie("jwt", refreshToken, {httpOnly: true})
    }
    catch(err){
        if(!!!err.code || err.code === 500){
            next(ServerError.internalServerError());
            return;
        }       

        next(new ServerError(err.code, err.msg))
    }
}

export const handleUserLogIn = async (req, res, next)=> {
    const {companyName, username, password} = req.body;

    if(!!!companyName || !!!username || !!!password){
        next(ApiError.badRequestError("company name or username or password is missing"));
        return;
    }

    if(companyName !== "yacpa"){
        return next(ApiError.badRequestError("company name should be yacpa"));
    }
    
    const foundedUser = await User.findOne({username, companyName}).exec();
    console.log("foundedUser", foundedUser);

    if(!!!foundedUser){
        next(ApiError.unauthorizedRequestError("company name or username or password is wrong"));
        return;
    }

    console.log("password", password, "hashed", foundedUser._doc.password);
    const pwdMatched = await bcrypt.compare(password, foundedUser._doc.password);
    if(!pwdMatched){
        return next(ApiError.unauthorizedRequestError("company name or username or password is wrong"));
    }

    if(foundedUser.status === "banned"){
        
        const bannedUser = await BannedUser.findOne({userId: foundedUser._id}).exec();
        const banMessage = writeBannedUserMsg("user", bannedUser.period);
        return next(ApiError.forbiddenRequestError(banMessage))
    }

    if(foundedUser.status === "deleted"){

        const foundedDeletedUser = await DeletedUser.findOne({userId: foundedUser._id}).exec();
        const deleteMessage = writeDeletedUserMsg("user" );
       
        if(!!!foundedDeletedUser){
            await foundedUser.deleteOne();
        }

        return next(new ApiError(404, deleteMessage))
    }

    const puplicUserData = {
        id: foundedUser._id,
        username: foundedUser._doc.username,
        companyName: foundedUser._doc.companyName,
        status: foundedUser.status
    }    
    const accessToken = jwt.sign({...puplicUserData}, process.env.ACCESS_TOKEN_SECRETE, {expiresIn: "2m"})
    const refreshToken = jwt.sign({...puplicUserData}, process.env.REFRESH_TOKEN_SECRETE, {expiresIn: "1d"})
    
    foundedUser.refreshToken = refreshToken
    const updatedUser = await foundedUser.save()
    console.log("updatedUser", updatedUser)
    
    res.cookie("jwt", refreshToken, {httpOnly: true, sameSite: "None", secure: true, maxAge: 24 * 60 * 60 * 1000})
    // res.cookie("jwt", refreshToken, {httpOnly: true, maxAge: 24 * 60 * 60 * 1000})

    res.status(200).json({user: {...puplicUserData}, accessToken})
}
