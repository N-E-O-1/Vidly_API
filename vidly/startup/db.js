const mongoose = require('mongoose')
// const winston = require('winston')

module.exports = function(){
    const dblink = 'mongodb+srv://admin:admin@vidly1.smvy1.mongodb.net/Vidly1?retryWrites=true&w=majority'
    mongoose.connect(dblink)
        .then(() => console.log('connected to mongodb'))
}
