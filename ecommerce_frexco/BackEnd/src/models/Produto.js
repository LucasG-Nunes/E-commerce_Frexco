const mongoose = require("mongoose")

const Produto = mongoose.model("Produto",{
    genus: String,
    name: String,
    family: String,
    order: String,
    nutritions:{
        carbohydrates: Number,
        protein: Number,
        fat: Number,
        calories:Number,
        sugar: Number
    }
})

module.exports = Produto
