const express = require("express")
const router = express.Router()

router.get("/", function(req, res){
  res.render("index")
})

router.get("/logout", function(req, res){
  req.session.user = null;
  res.redirect("/login")
})

module.exports = router
