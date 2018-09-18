const mongoose = require('mongoose');

const CocktailSchema = new mongoose.Schema({
    name: string,
    url: string,
    description: string,
    price: number,
    ingredients: [],
    image: string,
    rating: number
})