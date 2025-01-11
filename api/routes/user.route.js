

import express from "express"

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("Just for testing, api is working")
}) 

export default router