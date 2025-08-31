import express from "express";
import { getallMessages, sendMessage } from "../controllers/message.js";
import { isAdminAuthenticated } from "../auth.js";

const router = express.Router();

router.post("/send", sendMessage);
router.get("/all/messages", isAdminAuthenticated, getallMessages);

export default router;
