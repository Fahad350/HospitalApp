import { catchAsyncErrors } from "./middlewares/catchAsyncErrors.js";
import ErrorHandler from "./middlewares/errorMiddleware.js";
import jwt from "jsonwebtoken";
import { User } from "./models/userSchema.js";

export const isAdminAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const token = req.cookies.adminToken;
  if (!token) {
    return next(
      new ErrorHandler("This Admin is Non Authenticated to Access!", 400)
    );
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  req.user = await User.findById(decoded.id);
  if (req.user.role !== "Admin") {
    return next(new ErrorHandler(`${req.user.role} is not authrized!`, 403));
  }
  next();
});

export const isPatientAuthenticated = catchAsyncErrors(
  async (req, res, next) => {
    const token = req.cookies.patientToken;
    if (!token) {
      return next(
        new ErrorHandler("This Patient is Non Authenticated to Access!", 400)
      );
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decoded.id);
    if (req.user.role !== "Patient") {
      return next(new ErrorHandler(`${req.user.role} is not authrized!`, 400));
    }
    next();
  }
);
