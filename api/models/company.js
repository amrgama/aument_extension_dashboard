import mongoose from "mongoose";
import User from "./user.js";

const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    companyName: {
        type: String,
        unique: true,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        require: true,
    },
    password: {
        type: String,
        unique: true,
        require: true,
    },
    vector: {
        type: String,
        unique: true,
    },
    users: [{type: mongoose.Types.ObjectId, ref: "User"}],
    status: {
        type: String,
        default: "allowed"
    },
    refreshToken: {
        type: String,
    },
}, {timestamps: true});

export default mongoose.model("Company", CompanySchema);