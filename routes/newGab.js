const express = require("express")
const router = express.Router()
const models = require("../models")


router.get("/newGab", function(req,res){
  res.render("newGab")
})

router.post("/newGab", function(req,res){
  console.log(res);
  const newGab = models.posts.build({
    title: req.body.title,
    body: req.body.body,
    userId: req.session.user.id
  })
  newGab.save()
  .then(function(post){
    res.redirect("/")
    console.log(post);
  })
  .catch(function(error){
    console.log(error)
    res.render("newGab", {
      errorMessage: "Didn't submit Gab post!",
      error: error.errors
    })
  })
})

module.exports = router
