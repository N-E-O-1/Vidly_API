const Joi = require('joi');
const joiObjectid = require('joi-objectid');
const mongoose = require('mongoose');
const {genreSchema, Genre} = require('./genre');

const Movie = mongoose.model('Movies', new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true, 
    minlength: 5,
    maxlength: 255
  },
  genre: { 
    type: genreSchema,  
    required: true
  },
  numberInStock: { 
    type: Number, 
    required: true,
    min: 0,
    max: 255
  },
  dailyRentalRate: { 
    type: Number,
    required: true,
    min: 0,
    max: 255
  }
}));

async function createMovie(title,genre,numberInStock,dailyRentalRate){
  const movie = new Movie({
    title,
    genre,
    numberInStock,
    dailyRentalRate
  })
  const result = await movie.save();
  console.log(result)
}
async function updateMovie(movieId){
  const movie = await Movie.findById(movieId);
  movie.genre.name = 'Adventure';
  movie.save()
}

function validateMovie(movie) {
  const schema = Joi.object ({
    title: Joi.string().min(5).max(50).required(),
    genreId: Joi.ObjectId().required(),
    numberInStock: Joi.number().min(0).required(),
    dailyRentalRate:Joi.number().min(0).required()
  });

  return schema.validate(movie);
}

// createMovie(new Customer({name:'Hrishi',phone:'12345',isGold:true}),'hellboy',new Genre({name:'Action'}),1,20)
// updateMovie('62762f20387e5f5b3892f3bf')


exports.Movie = Movie; 
exports.validate = validateMovie;