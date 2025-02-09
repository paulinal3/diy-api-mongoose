const mongoose = require('mongoose')

const cuisineSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength: 3,
        maxlength: 100
    },
    dishType: {type: String},
    description: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Cuisine', cuisineSchema)