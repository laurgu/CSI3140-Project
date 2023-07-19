const mongoose = require('./init');

// Schema for users of app
const DocumentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
    },
    date: {
        type: Date
    },
    author: {
        type: String,
        required: true
    }
});


const Document = (module.exports = mongoose.model('documents', DocumentSchema))
