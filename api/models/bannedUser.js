import mongoose from "mongoose";
import User from "./user.js";

const Schema = mongoose.Schema;

const BannedUserSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        require: true,
        unique: true
    },
    period: {
        type: String,
        default: "byMe"
    }
}, {timestamps: true});

export default mongoose.model("BannedUser", BannedUserSchema);