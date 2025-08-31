import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = mongoose.Schema({
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
  password: {
    type: String,
    required: true,
    minLength: [8, "Password must contain 8 charchters"],
    select: false,
  },
  role: {
    type: String,
    required: true,
    enum: ["Admin", "Patient", "Doctor"],
  },
  doctorDept: {
    type: String,
  },
  docAvator: {
    public_id: String,
    url: String,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});
userSchema.methods.comparedPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateJsonWebToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

export const User = mongoose.model("User", userSchema);
