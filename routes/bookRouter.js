
const {response} = require("express")
const express = require("express")
const booksController = require("../controllers/booksController")

const routes = (Book) => {

    const bookRouter = express.Router()
    const controller = booksController(Book)
    console.log("asdasdasd",Book)
    bookRouter.route('/books')
        .post(controller.postBook)
        .get(controller.getBooks)
        
    
    bookRouter.route('/books/:bookId')
        .get(controller.getBooksById)
        .put(controller.putBook)
        .delete(controller.deleteBook)
    return bookRouter
}

module.exports = routes