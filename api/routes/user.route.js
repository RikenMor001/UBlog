

import express from "express"

const router = express.Router();

router.get("/test", (req, res) => {

import express from "express"
import { test } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/test", test) 

export default router
  res.send("Just for testing, api is working")
}) 

export default router
