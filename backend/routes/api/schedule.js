const express = require('express')
const router = express.Router()
const asyncHandler = require("express-async-handler");

const { Child } = require("../../db/models/child");

router.get("/", async (req, res,next) => {
  const children = await Child.findAll();
  res.json({ children });
});


module.exports = router;
