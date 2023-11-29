import express from "express";
import isAuth from "../middleware/isAuth.js";
import verfiyJWT from "../middleware/verifyJWT.js";
import { banCompany, createNewCompany, deleteCompany, getAllCompanies, unbanCompany, undeleteCompany } from "../controllers/companyController.js";

const companyRouter = express.Router();

companyRouter
.get("/all", isAuth, verfiyJWT, getAllCompanies)
.post("/create-company", isAuth, verfiyJWT, createNewCompany)
.post("/delete-company", isAuth, verfiyJWT, deleteCompany)
.post("/undelete-company", isAuth, verfiyJWT, undeleteCompany)
.post("/ban-company", isAuth, verfiyJWT, banCompany)
.post("/unban-company", isAuth, verfiyJWT, unbanCompany)

export default companyRouter;