import isAuth from "../middleware/isAuth.js";
import upload from "../middleware/upload.js";
import verifyJWT from "../middleware/verifyJWT.js";
import fileController from "../controllers/fileController.js";
import express from "express";

const router = express.Router();
router
.post("/upload", upload.single("image"), fileController.sendFileUrl);


export default router;