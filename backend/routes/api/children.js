const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const {Chore} = require("../../db/models")

router.get(
  "/:childId",
  asyncHandler(async function (req, res) {
  const chores = await Chore.findAll(
    {where:{
     childId:req.params.childId
    }})
    res.json({chores})
  })
)




module.exports = router;
