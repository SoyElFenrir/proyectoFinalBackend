const mongoose = require("mongoose")

const { Schema } = mongoose

const usserModel = new Schema(
  {
    firstName: {type: String },
    lastName: {type: String },
    usserName: {type: String },
    password: {type: String },
    email: {type: String},
    sexo: {type: Number},
    dateNac: {type: Date},
    address: {type: String},
    phone: {type: Number}
  },
  {
    collection: 'ussers'
  }
)

module.exports = mongoose.model("Usser", usserModel)