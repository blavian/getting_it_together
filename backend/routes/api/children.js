const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");

router.get(
  "/",
  asyncHandler(async function (req, res, _next) {
    console.log("route hit");
    res.json({ message: "this works" });
  })
);



module.exports = router;
