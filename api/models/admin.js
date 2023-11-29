import mongoose from "mongoose";
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    vector: {
        type: String,
        unique: true,
    },
    fullName: {
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
        require: true,
    },
    password: {
        type: String,
        unique: true,
        require: true,
    },
    refreshToken: {
        type: String,
    },
}, {timestamps: true});

export default mongoose.model("Admin", AdminSchema);