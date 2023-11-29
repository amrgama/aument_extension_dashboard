import mongoose from "mongoose";
import User from "./user.js";

const Schema = mongoose.Schema;

const DeletedUserSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        require: true
    }
}, {timestamps: true, expireAfterSeconds: 2592000});

export default mongoose.model("DeletedUser", DeletedUserSchema);