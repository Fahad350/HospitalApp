import mongoose from "mongoose";
import validator from "validator";

const appointmentSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First Name must contain 3 charchters"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last Name must contain 3 charchters"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "Please Provide Valid Email"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [11, "Phone must contain 11 digits"],
    maxLength: [11, "Phone must contain 11 digits"],
  },
  cnic: {
    type: String,
    required: true,
    minLength: [13, "CNIC must contain 13 digits"],
    maxLength: [13, "CNIC must contain 13 digits"],
  },
  dob: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ["Male", "Female"],
  },

  appointment_date: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  doctor: {
    doctor_firstName: {
      type: String,
      required: true,
    },
    doctor_lastName: {
      type: String,
      required: true,
    },
  },
  hasVisited: {
    type: Boolean,
    default: false,
  },
  doctorId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  PatientId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["pending", "confirmed", "cancelled"],
    default: "pending",
  },
});

export const Appointment = mongoose.model("Appointment", appointmentSchema);
