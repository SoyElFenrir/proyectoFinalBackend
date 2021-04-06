const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const Book = require("./models/bookModel")
const bookRouter = require("./routes/bookRouter.js")(Book)

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
app.use('/api', bookRouter)

const port = 8085

app.listen(port, () => {
  console.log(`server started on port: ${port}`)
})