const sendFileUrl = async(req, res)=>{
   try{
        // console.log("requpload",req)
        const file = req.file;
        const url = process.env.IMAGE_PATH+file.filename
        const imgUrl = url;
        // console.log("image", image)
        res.status(200).json({imgUrl});
   }
   catch(err){
    
        if(!!!err.code || err.code === 500){
            next(ServerError.internalServerError());
            return;
        }       

        next(new ServerError(err.code, err.msg))
    }
}

const sendFile = (req, res, next)=>{
    // res.sendFile("../content.js");
}

export default {
    sendFileUrl,
    sendFile
}