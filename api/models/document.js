const mongoose = require('./init');

// Schema for users of app
const DocumentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: false
    },

},
    {strict:false}
);


const Document = (module.exports = mongoose.model('documents', DocumentSchema))
