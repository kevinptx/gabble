const express = require("express")
const router = express.Router()
const models = require("../models")


router.get("/newGab", function(req,res){
  res.render("newGab")
})


module.exports = router
