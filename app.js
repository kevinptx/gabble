const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const mustache = require("mustache-express")

app.engine('mustache', mustache())
app.set('view engine', 'mustache')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

const mainRoute = require("./routes/mainRoute")
app.use(mainRoute)

app.listen(3000, function(req,res){
  console.log("We are gabbing!!!");
})
