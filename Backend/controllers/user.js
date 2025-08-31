import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { generateToken } from "../utils/jwtTokens.js";

import { User } from "../models/userSchema.js";
import cloudinary from "cloudinary";

export const patientRegister = catchAsyncErrors(async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    cnic,
    dob,
    gender,
    password,
    role,
  } = req.body;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !cnic ||
    !dob ||
    !gender ||
    !password ||
    !role
  ) {
    return next(new ErrorHandler("Please Fill All Required Fields", 400));
  }
  let user = await User.findOne({ email });
  if (user) {
    return next(new ErrorHandler("User Already Exist", 400));
  }
  user = await User.create({
    firstName,
    lastName,
    email,
    phone,
    cnic,
    dob,
    gender,
    password,
    role,
  });
  generateToken(user, "New User Register", 200, res);
});
export const login = catchAsyncErrors(async (req, res, next) => {
  const { email, password, role } = req.body;

  if (!email || !password || !role) {
    return next(new ErrorHandler("please provide all details", 400));
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid Email or Password!", 400));
  }

  const isPasswordMatch = await user.comparedPassword(password);
  if (!isPasswordMatch) {
    return next(new ErrorHandler("Invalid Email or Password!", 400));
  }

  if (role !== user.role) {
    return next(new ErrorHandler("User not found, check role!", 400));
  }

  generateToken(user, "Login Successfully!", 200, res);
});

export const addNewAdmin = catchAsyncErrors(async (req, res, next) => {
  const { firstName, lastName, email, phone, cnic, dob, gender, password } =
    req.body;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !cnic ||
    !dob ||
    !gender ||
    !password
  ) {
    return next(new ErrorHandler("Please Fill All Required Fields", 400));
  }
  const isRegister = await User.findOne({ email });
  if (isRegister) {
    return next(new ErrorHandler(`${isRegister.role} Already Exist`, 400));
  }
  const newAdmin = await User.create({
    firstName,
    lastName,
    email,
    phone,
    cnic,
    dob,
    gender,
    password,
    role: "Admin",
  });
  res.status(200).json({
    success: true,
    message: "New Admin Registered!",
  });
});

export const getAllDoctors = catchAsyncErrors(async (req, res, next) => {
  const doctors = await User.find({ role: "Doctor" });
  res.status(200).json({
    success: true,
    doctors,
  });
});

export const getUserAllDetails = catchAsyncErrors(async (req, res, next) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    user,
  });
});

export const logoutAdmin = catchAsyncErrors(async (req, res, next) => {
  res
    .status(200)
    .cookie("adminToken", " ", {
      httpOnly: true,
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "Admin Logout successfully",
    });
});

export const logoutPatient = catchAsyncErrors(async (req, res, next) => {
  res
    .status(200)
    .cookie("patientToken", " ", {
      httpOnly: true,
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "Patient Logout successfully",
    });
});

export const addNewDoctor = catchAsyncErrors(async (req, res, next) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return next(new ErrorHandler("Doctor Avator Required!", 400));
  }
  const { docAvator } = req.files;
  const allowedFormates = ["image/jpeg", "image/png", "image/webp"];
  if (!allowedFormates.includes(docAvator.mimetype)) {
    return next(new ErrorHandler("This File Formate Not Allowed!", 400));
  }
  const {
    firstName,
    lastName,
    email,
    phone,
    cnic,
    dob,
    gender,
    password,
    doctorDept,
  } = req.body;
  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !cnic ||
    !dob ||
    !gender ||
    !password ||
    !doctorDept
  ) {
    return next(new ErrorHandler("Please Fill All Required Fields", 400));
  }
  const isDocRegister = await User.findOne({ email });
  if (isDocRegister) {
    return next(new ErrorHandler("Doctor Already Register!", 400));
  }
  const cloudinaryResponse = await cloudinary.uploader.upload(
    docAvator.tempFilePath
  );
  if (!cloudinaryResponse || cloudinaryResponse.error) {
    // return next(new ErrorHandler("file do not uploaded", 400));
    console.error(
      "cloudinary error: ",
      cloudinaryResponse.error || "unknown cloudinary error"
    );
  }
  const doctor = await User.create({
    firstName,
    lastName,
    email,
    phone,
    cnic,
    dob,
    gender,
    password,
    doctorDept,
    role: "Doctor",
    docAvator: {
      public_id: cloudinaryResponse.public_id,
      url: cloudinaryResponse.secure_url,
    },
  });
  res.status(200).json({
    success: true,
    message: "New Doctor Register!",
    doctor,
  });
});
