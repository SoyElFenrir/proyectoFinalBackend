const booksController = (Book) => {
  
  const postBook = async (req, res) => {
    try {
        const book = new  Book(req.body)
  
        await book.save()//guarda en la base 
        return res.status(201).json(book)
    }catch (err) {
        throw err
    }
  }

  const getBooks = async (req, res) => {//muestra todo lo que contiene mi body
    try{
        const { query } = req
        //console.log('query: ', query)
        const response = await Book.find(query)

        return res.json(response)
    }catch (err) {
        throw err
    }
  }

  const getBooksById = async (req, res) => {
    try{
        const { params } = req
        console.log('params: ', params)
        const response = await Book.findById(params.bookId)
    
        res.json(response)
    }catch (err){
        throw err
    }
  }

  const putBook = async (req,  res) => {
    const {params, body} = req

    const response = await Book.findByIdAndUpdate0(
      {_id: params.bookId}, {
        $set: {
          title: body.title,
          genre: body.genre,
          author: body.author,
          read: body.read}
      }, {new: true})
    return res.status(202).json(response)
  }

  const deleteBook = async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.bookId)
        return res.status(202).json({message:"The book has been deleted successfully"})
    }catch (err){
        throw err
    }
  }

  return {getBooks, postBook, getBooksById, putBook, deleteBook}

}

module.exports = booksController


  
    
  //   // try{
  //   //     const { body } = req
  //   //     const response = await Book.updateOne({
  //   //         _id: req.params.bookId
  //   //     }, {
  //   //         $set: {
  //   //             title: body.title,
  //   //             genre: body.genre,
  //   //             author: body.author,
  //   //             read: body.read
  //   //         }
  //   //     })
    

  //   //     return res.status(202).json(response)
  //   // }catch (err) {
  //   //     throw err
  //   // }
  // }
