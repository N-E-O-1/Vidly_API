const express = require('express')
const auth = require('../Routes/auth')
const genres = require('../Routes/genre');
const customers = require('../Routes/customer')
const movies = require('../Routes/movies')
const rentals = require('../Routes/rentals')
const users = require('../Routes/users')
const error = require('../middleware/error')


module.exports = function(app){
    app.use(express.json());
    app.use('/api/genres',genres);
    app.use('/api/customers',customers);
    app.use('/api/movies',movies)
    app.use('/api/rentals',rentals)
    app.use('/api/users',users)
    app.use('/api/auth',auth)
    app.use(error)
}