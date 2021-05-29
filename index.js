const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const Publication = require("./models/publicationModel")
const publicationRouter = require("./routes/publicationRouter")(Publication)

const Usser = require("./models/usserModel")
const usserRouter = require("./routes/usserRouter")(Usser)

const app = express()
const connectDB = async () => {
  try{
    await mongoose.connect("mongodb://localhost/bookAPI", {useNewUrlParser : true})
  }catch (err) {
    throw err
  }
}
connectDB()
//mongoose.connect('mongodb://localhost/bookAPI', {useNewUrlParser: true})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/api', publicationRouter)
app.use('/api', usserRouter)

const port = 8085

app.listen(port, () => {
  console.log(`server started on port: ${port}`)
})


//asdnajkshdkjashdkjashdjkhajkshdj