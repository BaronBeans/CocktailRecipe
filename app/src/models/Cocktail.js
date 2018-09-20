const mongoose = require('mongoose');

const CocktailSchema = new mongoose.Schema({
    name: String,
    url: String,
    description: String,
    price: Number,
    ingredients: [String],
    image: String,
    rating: Number
})