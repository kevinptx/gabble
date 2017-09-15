const express = require("express")
const router = express.Router()
const models = require("../models")
router.get("/logout", function(req, res){
  req.session.user = null;
  res.redirect("/login")
})

router.get("/delete/:id", function(req, res){
  models.posts.destroy({
    where: {
      id : req.params.id
    }
    })
    .then(function(){
      res.redirect("/")
  })
})


module.exports = router
