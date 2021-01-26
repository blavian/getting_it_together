const express = require('express')
const router = express.Router()

router.get("/",async (req,res)=>{
    console.log('route hit')
    res.json({message:"this works"})
})

module.exports = router;
