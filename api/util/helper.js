import fs from "fs";
import path from "path";

export function generate_unique_username(prefix){
    const maxPrefixLength = 12;
    if(prefix.length > maxPrefixLength){
        const negativeDifference = maxPrefixLength - prefix.length;
        prefix = prefix.slice(0, negativeDifference);

        prefix = (prefix.endsWith("_"))? prefix.slice(0, -1) : prefix;
    }
    const uniquePart = Date.now().toString(36);
    const username = `${prefix}_${uniquePart}`;
    return username;
}

// export function generatePublicId() {

// }

export const isValidObj = (obj,props) => {
    const validKey = props.some(prop => obj.hasOwnProperty(prop));
    console.log("validkey: "+validKey)

    const validVal = Object.values(obj).every(val =>{
        return val !== null && val !== undefined && val !== ""
    });
    console.log("validVal: "+validVal)

    return (validKey !== false) && (validKey !== false)
};

export const removeFile = async(path)=>{
    if(fs.existsSync(path)){
        await fs.unlink(path, err=>{
            if(err){
                throw err;
            }
        })
    }
    else{
        console.log("file path does not exist")
    }
}

export function writeBannedUserMsg(type, period){
    if(type === "user"){
        const normalizedPeriod = normalizeBanPeriod(period);
        return `You have been banned wait ${normalizedPeriod}`;
    }

    if(type === "company"){
        const normalizedPeriod = normalizeBanPeriod(period);
        return `Your company have been banned wait ${normalizedPeriod}`;
    }

    return new Error("unvalid type value");
}
export function writeDeletedUserMsg(type, period){
    if(type === "user"){

        return `You have been deleted`;
    }

    if(type === "company"){

        return `Your company have been deleted`;
    }

    return new Error("unvalid type value");
}

function normalizeBanPeriod(period){

    switch(period){
        case "7d":
            return "7 days for you to be reactivated";
        
        case "30d":
            return "30 days for you to be reactivated";

        case "byMe":
            return "until admin unban you";

        default:
            return new Error("unvalid period value")
    }
}

export default {
    generate_unique_username,
    isValidObj,
    removeFile
}