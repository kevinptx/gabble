const express = require("express")
const router = express.Router()
const models = require("../models")

router.get("/login", function(req, res){
  res.render("login")
})



module.exports = router
