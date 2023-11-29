import verfiyJWT from "../middleware/verifyJWT.js";
import isAuth from "../middleware/isAuth.js";
import express from "express";
import { handleUserLogIn } from "../controllers/authController.js";
import { createNewUser, getUserStatus, getUsers } from "../controllers/userController.js";
import withNewUserPublicKey from "../middleware/withNewUserPublicKey.js";
import isAdmin from "../middleware/isAdmin.js";

const userRouter = express.Router();
userRouter
.post("/register", withNewUserPublicKey, createNewUser)
.post("/log-in", handleUserLogIn)
.post("/create-user", isAuth, verfiyJWT, isAdmin, createNewUser)
.get("/all", isAuth, verfiyJWT, getUsers)
.post("/get-user-status", getUserStatus)
// .get("/:username/status", getUserStatus)

export default userRouter;