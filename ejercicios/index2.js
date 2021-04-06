const express = require("express")

const app = express()

const pies = [
  {'id':1,'name':'apple'},
  {'id':2,'name':'cherry'}
]

app.get("/", (req, res) => {
  res.status(200).json({
    'status': 200,
    'statusText': 'OK',
    'message': 'All pies retrieved',
    'data': pies
  });
})

app.listen(9090, () => {
  console.log("server started...")//eslint-disable-line
})

