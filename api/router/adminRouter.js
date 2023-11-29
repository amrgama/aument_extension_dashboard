import express from "express";
import { handleAdminLogIn, handleAdminLogOut } from "../controllers/authController.js";
import { createAdmin, createNewUser } from "../controllers/registerController.js";
import {banUser, deleteUser, unbanUser } from "../controllers/AdminController.js";
import isAuth from "../middleware/isAuth.js";
import verfiyJWT from "../middleware/verifyJWT.js";

const adminRouter = express.Router();
adminRouter.post("/register", createAdmin)
.post("/auth/log-in", handleAdminLogIn)
.get("/auth/log-out", handleAdminLogOut)
.post("/create-user", isAuth, verfiyJWT, createNewUser)
.post("/delete-user", isAuth, verfiyJWT, deleteUser)
.post("/user/ban", isAuth, verfiyJWT, banUser)
.post("/unban-user", isAuth, verfiyJWT, unbanUser)



export default adminRouter;