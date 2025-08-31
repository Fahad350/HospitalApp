import mongoose from "mongoose";
import validator from "validator";

const messageSchema = mongoose.Schema({
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
  message: {
    type: String,
    required: true,
    minLength: [5, "Message contain atleast 5 chrachter"],
  },
});

export const Message = mongoose.model("Message", messageSchema);
