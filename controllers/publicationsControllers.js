const publicationsController = (Publication) => {
  
  const postPublications = async (req, res) => {
    try {
        const publication = new  Publication(req.body)
  
        await publication.save()//guarda en la base 
        return res.status(201).json(publication)
    }catch (err) {
        throw err
    }
  }

  const getPublications = async (req, res) => {//muestra todo lo que contiene mi body
    try{
        const { query } = req
        
        const response = await Publication.find(query)

        return res.json(response)
    }catch (err) {
        throw err
    }
  }

  const getPublicationsById = async (req, res) => {
    try{
        const { params } = req
        console.log('params: ', params)
        const response = await Publication.findById(params.publicationId)
    
        res.json(response)
    }catch (err){
        throw err
    }
  }

  const putPublications = async (req,  res) => {
    const {params, body} = req

    const response = await Publication.findByIdAndUpdate(
      {_id: params.publicationId}, {
        $set: {
          title: body.title,
          subtitle: body.subtitle,
          author: body.author,
          genre: body.genre,
          description: body.description,
          comment: body.comment}
      }, {new: true})
    return res.status(202).json(response)
  }

  const deletePublications = async (req, res) => {
    try {
        await Publication.findByIdAndDelete(req.params.publicationId)
        return res.status(202).json({message:"The book has been deleted successfully"})
    }catch (err){
        throw err
    }
  }

  return {getPublications, postPublications, getPublicationsById, putPublications, deletePublications}

}

module.exports = publicationsController
