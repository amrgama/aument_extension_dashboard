import ApiError from "../error/ApiError.js";
import ServerError from "../error/ServerError.js";

export const apiErrorHandler = (err, req, res, next)=> {
    if(err instanceof ApiError){
        res.status(err.code).json(err.message);
        return;
    }

    next(err);
};

export const serverErrorHandler = (err, req, res, next)=> {
    console.error("errorStack in serverError: ",err?.stack, "error: ", err)
    if(err instanceof ServerError){
        res.status(err.code).json(err.message);
        return;
    }

    res.status(500).json("something went wrong");
};

export default {
    apiErrorHandler,
    serverErrorHandler
}
