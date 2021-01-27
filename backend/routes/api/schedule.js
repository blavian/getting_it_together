const express = require('express')
const router = express.Router()
const asyncHandler = require("express-async-handler");

const { Child } = require("../../db/models");

// router.get("/", asyncHandler,async(req, res) => {
// });
router.get(
  "/:userId",
  asyncHandler(async function (req, res, _next) {
   console.log("____we got here");
   const children = await Child.findAll({where:{
     userId:req.params.userId
   }});
   console.log(children, "--------");
   res.json({ children });
  })
);


module.exports = router;
