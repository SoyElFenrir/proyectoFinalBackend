const { response } = require("express")
//const jwt = require('jsonwebtoken')
//const bcrypt = require('bcrypt')

const usserController = (Usser) =>{
  
  const postUsser = async (req, res) => {
    try{
      const { body } = req

      //const encryptedPassword = await bcrypt.hash(req.body.password, 10)
     // const encryptedUser = 
     console.log('body completo'+ body)

      const usser = new Usser({
        firstName: body.firstName,
        lastName: body.lastName,
        usserName: body.usserName,
        /*...body/*,
        usserName:(() => {
          if(body.lastName && body.firstName){
            return (body.firstName + "." + body.lastName)
          }
          else{
            return body.firstName ? body.firstName : body.lastName
          }
          })(),*/
        password: body.password,
        email: body.email,
        sexo: body.sexo,
        dateNac: body.dateNac,
        address: body.address,
        phone: body.phone
      })

      console.log('mando'+req)
      console.log('devuelvo'+res)
      await usser.save()

      return res.status(201).json(usser)
    }catch(error){
      throw error
    }
  }

  const getUssers = async (req, res) => {
    try{
      const { query } = req
      const response = await Usser.find(query)
      return res.json(response) 
    }catch(error){
      throw error
    }
  }

  const getUsserById = async (req, res) =>{
    try{
      const{ params } = req
      console.log('este es el params'+ params)
      const response = await Usser.findById(params.usserId)
      console.log('este es el response'+response)
      return res.json(response)
    }catch(error){
      throw error
    }
  }

  const putUsserById = async (req, res) =>{
    try{    
      const { params, body } = req
      const response = await Usser.findByIdAndUpdate(
        {_id: params.usserId}, {
          $set: {
            /*...body,*/
            firstName: body.firstName,
            lastName: body.lastName,
            userName: body.userName,
            /*userName: (() => {
              if(body.lastName && body.firstName){
                return (body.firstName + "." + body.lastName)
              }
              else{
                return body.firstName ? body.firstName : body.lastName
              }
              })(),*/
            password: body.password,
            email: body.email,
            sexo: body.sexo,
            dateNac: body.dateNac,
            address: body.address,
            phone: body.phone}
            },{new: true})
      return res.status(202).json(response)
    }catch(error){
      throw error
    }
  }

  const deleteUsserById = async(req, res) =>{
    try{
      const { params } = req
      await Usser.findByIdAndDelete(params.usserId)
      return res.status(202).json({message: "The User has been deleted successfully"})
    } catch(error){
      throw error
    }
  }

  /*const postUsserLogIn = async(req, res) => {
    try{
      const {body} = req
      const response = await Usser.findOne({usserName: body.usserName})
      const isPasswordCorrect = await bcrypt.compare(body.password, response.password)
      console.log(isPasswordCorrect)
      if(response!= null && isPasswordCorrect){
        const tokenUser = {
          firstName: response.firstName,
          lastName: response.lastName,
          userName: response.userName
        }
        const token = jwt.sign(tokenUser, 'secret', {expiresIn: '1h'})
        return res.status(202).json({message: 'Welcome Usser: ' + response.usserName, token: token})
      }
      else{
        return res.status(202).json({message: 'Dates Invalides'})
      }

    }catch(error){
      throw error
    }
  }*/

  return {getUssers, postUsser, getUsserById, putUsserById, deleteUsserById/*,postUsserLogIn*/}
}

module.exports = usserController