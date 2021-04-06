const express = require("express")

const app = express()
const bookRouter = express.Router()

bookRouter.route('/books').get((req, res) => {
  const response = {
    book: 'Harry Potter 1',
    author: 'J. K. Rowling'
}

  res.json(response)
})

app.use('/api', bookRouter)

const port = 8080

app.listen(port, () => {
  console.log(`server started on port: ${port}`)//eslint-disable-line
})

