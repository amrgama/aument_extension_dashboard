import jwt from "jsonwebtoken";

const handleRefreshToken = async (req, res)=> {
    try{
        console.log("resvariable", res.locals.decodedToken);
        const accessToken = jwt.sign({_id: res.locals.decodedToken._id}, process.env.ACCESS_TOKEN_SECRETE, {expiresIn: "2m"})
        res.status(200).json({accessToken})
    }
    catch(err){
        
        if(!!!err.code || err.code === 500){
            next(ServerError.internalServerError());
            return;
        }       

        next(new ServerError(err.code, err.msg))
    }
}

export default handleRefreshToken;