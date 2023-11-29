export default class ServerError{
    constructor(code, msg){
        this.code= code;
        this.message= msg;
    }

    static internalServerError(msg){
        const message = msg ?? "something went wrong";
        return new ServerError(500, message);
    }
}