import jwt from "jsonwebtoken";
import ApiError from "../error/ApiError.js";

const isAuth = async (req, res, next)=> {
    const cookies = req.cookies;
    console.log("cookie", cookies)

    if(!cookies?.jwt) return next(ApiError.unauthorizedRequestError());
 
    try{
        // const foundUser = await User.findOne({refreshToken})
        // if(!foundUser) return res.sendStatus(401)
        
        const refreshToken = cookies.jwt;
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRETE, (err, decodedToken)=> {
            if( err ) {
                // console.log("decoded", decoded.userId, "_id", foundUser._id.toString())
                next( ApiError.forbiddenRequestError("Expired login session, login again") );
                return;
            }

            res.locals.decodedToken = decodedToken;
            next();
        })
    }
    catch(err){
        
        if(!!!err.code || err.code === 500){
            next(ServerError.internalServerError());
            return;
        }       

        next(new ServerError(err.code, err.msg))
    }
}

export default isAuth;