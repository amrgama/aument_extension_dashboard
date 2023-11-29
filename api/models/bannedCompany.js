import mongoose from "mongoose";
import Company from "./company.js";

const Schema = mongoose.Schema;

const BannedCompanySchema = new Schema({
    companyId: {
        type: Schema.Types.ObjectId,
        ref: "Company",
        require: true,
        unique: true
    },
    period: {
        type: String,
        default: "byMe"
    }
}, {timestamps: true});

export default mongoose.model("BannedCompany", BannedCompanySchema);