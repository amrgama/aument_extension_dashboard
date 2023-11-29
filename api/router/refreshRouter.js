import express from "express";
import isAuth from "../middleware/isAuth.js";
import handleRefreshToken from "../controllers/handleRefreshToken.js";

const refreshRouter = express.Router();
refreshRouter
.get("/", isAuth, handleRefreshToken)

export default refreshRouter;