import mongoose from "mongoose";
import Company from "./company.js";

const Schema = mongoose.Schema;

const DeletedCompanySchema = new Schema({
    companyId: {
        type: Schema.Types.ObjectId,
        ref: "Company",
        require: true
    }
}, {timestamps: true, expireAfterSeconds: 2592000});

export default mongoose.model("DeletedCompany", DeletedCompanySchema);