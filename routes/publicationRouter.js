const express = require("express")
const publicController = require("../controllers/publicationsControllers")

const routes = (Publication) => {

    const publicationRouter = express.Router()
    const controller = publicController(Publication)
    
    publicationRouter.route('/publications')
        .post(controller.postPublications)
        .get(controller.getPublications)
        
    
    publicationRouter.route('/publications/:publicationId')
        .get(controller.getPublicationsById)
        .put(controller.putPublications)
        .delete(controller.deletePublications)
    return publicationRouter
}

module.exports = routes