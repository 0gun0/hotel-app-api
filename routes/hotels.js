import express from "express";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

const router = express.Router();

//CREATE
router.post("/",createHotel);

//UPDATE
router.put("/:id", updateHotel);

//DELTE
router.delete("/:id", deleteHotel);

//GET
router.get("/:id", getHotel);
//GET ALL

router.get("/", getHotels);



export default router;