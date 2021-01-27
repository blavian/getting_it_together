const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");

router.get("/", asyncHandler, async (req, res) => {
  console.log("route hit");
  res.json({ message: "this works" });
});


module.exports = router;
