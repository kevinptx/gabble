const express = require("express")
const router = express.Router()
const models = require("../models")
const bcrypt = require("bcryptjs")


router.get("/register", function(req, res){
  res.render("register")
})

router.post("/register", function(req,res){
  const newUser = models.users.build({
    username: req.body.username,
    password: req.body.password,
    displayName: req.body.displayName
  })
  newUser.save()
  .then(function(user){
    res.redirect("/login")
  })
  .catch(function(error){
    res.render("register", {
      errorMessage: "Something is wrong!!",
      error: error.errors
    })
  })
})


module.exports = router