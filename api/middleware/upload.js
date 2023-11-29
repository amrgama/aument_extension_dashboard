import multer from "multer";
import path from "path"

export default upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      let filePath = path.join(__dirname, "..", '/public/uploads/');
      console.log("filepath", filePath)
      cb(null, filePath);
    },
    filename: (req, file, cb) => {
      // const ext = file.mimetype.split("/")[1];
      let fileName = `${Date.now()}_${file.originalname}`;
      cb(null, fileName);
    },
  })
});
