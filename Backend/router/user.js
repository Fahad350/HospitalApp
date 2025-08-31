import express from "express";
import {
  addNewAdmin,
  addNewDoctor,
  getAllDoctors,
  getUserAllDetails,
  login,
  logoutAdmin,
  logoutPatient,
  patientRegister,
} from "../controllers/user.js";
import { isAdminAuthenticated, isPatientAuthenticated } from "../auth.js";

const router = express.Router();

router.post("/patient/register", patientRegister);
router.post("/login", login);
router.post("/admin/register", isAdminAuthenticated, addNewAdmin);

router.get("/doctors", getAllDoctors);
router.get("/admin/me", isAdminAuthenticated, getUserAllDetails);
router.get("/admin/logout", isAdminAuthenticated, logoutAdmin);
router.get("/patient/me", isPatientAuthenticated, getUserAllDetails);
router.get("/patient/logout", isPatientAuthenticated, logoutPatient);

router.post("/doctor/addnew", isAdminAuthenticated, addNewDoctor);

export default router;
