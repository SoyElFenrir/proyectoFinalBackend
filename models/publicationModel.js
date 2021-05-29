const mongoose = require('mongoose')

const {Schema} = mongoose

const publicationModel = new Schema(
    {
        title: {type: String},
        subtitle: {type: String},
        author: {type: String},
        genre: {type: String},
        description: {type: String},
        comment: {type: String}
    },
    {
        collection: 'publications'
    }
)

module.exports = mongoose.model('Publication', publicationModel)