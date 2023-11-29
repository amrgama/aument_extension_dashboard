// import { v4 as uuidv4 } from 'uuid';

// export function generate_uuid() {
//     return uuidv4().slice(0, 12);
// }

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

export function isObjEmpty(obj) {
    return Object.keys(obj).length === 0
}

export function validUsername(username, condition){
 
    for(const [key, prop] of Object.entries(condition)){
        console.log("key: ", key, prop)
        if(key === "min" && (username.length < prop.value)) {
            return false;
        }
        else if(key === "max" && (username.length > prop.value)){
            return false;
        }
        else if(key === "startsWith" && !username.startsWith(prop.value)){
            return false;
        }
        else{
            return true;
        }
    }
}