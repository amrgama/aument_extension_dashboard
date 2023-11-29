import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    companyName: {
        type: String,
        require: true,
    },
    username: {
        type: String,
        unique: true,
        require: true,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        unique: true,
        require: true,
    },
    status: {
        type: String,
        default: "allowed"
    },
    refreshToken: {
        type: String,
    },
}, {timestamps: true});

export default mongoose.model("User", UserSchema);