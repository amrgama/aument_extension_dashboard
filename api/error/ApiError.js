export default class ApiError{
    constructor(code, msg){
        this.code = code;
        this.message= msg;
    }

    static badRequestError(msg){
        const message = msg ?? "bad request";
        return new ApiError(400, message);
    }
    
    static unauthorizedRequestError(msg){
        const message = msg ?? "unauthorized request";
        return new ApiError(401, message);
    }

    static forbiddenRequestError(msg){
        const message = msg ?? "forbidden request";
        return new ApiError(403, message);
    }
}