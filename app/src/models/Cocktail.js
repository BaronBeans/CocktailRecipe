const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;
var string = require('mongodb').string;
var number = require('mongodb').number;

const CocktailSchema = new mongoose.Schema({
    _id: ObjectId,
    name: string,
    url: string,
    description: string,
    price: number,
    ingredients: [],
    image: string,
    rating: number
})