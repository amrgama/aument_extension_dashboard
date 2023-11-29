import ApiError from "../error/ApiError.js";

const withNewUserPublicKey = async (req, res, next)=>{
    const {publicKey} = req.body;
    const yacpaHashedKey = "8b1a9953c4611296a827abf8c47804d7";

    if(!!!publicKey){
        return next(ApiError.badRequestError("new use public key missed"));
    }

    if(publicKey === yacpaHashedKey) {
        next();
    }
    else{
        next(ApiError.badRequestError("new use public key missed"));
    }
};

export default withNewUserPublicKey;