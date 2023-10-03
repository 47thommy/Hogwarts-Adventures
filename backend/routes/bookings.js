import express from "express";
import {
  createBooking,
  getAllBooking,
  getBooking,
} from "../Controllers/bookingController.js";
import { verifyAdmin, verifyUser, verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, verifyUser, createBooking);
router.get("/:id", verifyUser, getBooking);
router.get("/", verifyToken, verifyAdmin, getAllBooking);

export default router;
