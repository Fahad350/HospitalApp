import express from "express";
import {
  getAppointment,
  getAllAppointments,
  updateAppointmentStatus,
  deleteAppointment,
} from "../controllers/appointment.js";
import { isAdminAuthenticated, isPatientAuthenticated } from "../auth.js";

const router = express.Router();

router.post("/takeAppointment", isPatientAuthenticated, getAppointment);
router.get("/allAppointment", isAdminAuthenticated, getAllAppointments);
router.put(
  "/updateAppointment/:id",
  isAdminAuthenticated,
  updateAppointmentStatus
);

router.delete(
  "/deleteAppointment/:id",
  isAdminAuthenticated,
  deleteAppointment
);
export default router;
