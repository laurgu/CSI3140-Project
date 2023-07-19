const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect("mongodb+srv://csi3140:csi3140@csi3140.tdiheil.mongodb.net/main?retryWrites=true&w=majority")
    .then(() => {
        console.log('Successfully connected to database')
    })
    .catch(error => {
        console.error('Error connecting to MongoDB database\n', error)
    })

module.exports = mongoose