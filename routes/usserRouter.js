const { response } = require('express')
const express = require('express')
const usserController = require('../controllers/usserController')

const joi = require('joi')
const { required } = require('joi')
const validator = require('express-joi-validation').createValidator({})

const bodySchema = joi.object({
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  usserName: joi.string().required(),
  password: joi.string().required(),
  email: joi.string().required(),
  address: joi.string().required(),
  phone: joi.number().required()
})

const routes = (Usser) => {
  const usserRouter = express.Router()
  const controller = usserController(Usser)

  usserRouter.route('/ussers')
    .get(controller.getUssers)
    .post(controller.postUsser)

  usserRouter.route('/ussers/:usserId')
    .get(controller.getUsserById)
    .put(controller.putUsserById)
    .delete(controller.deleteUsserById)

  /*usserRouter.route('/ussers/login')
    .post(contoller.postUsserLogIn)*/

  return usserRouter
}

module.exports = routes