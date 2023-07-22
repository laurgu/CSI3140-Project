const mongoose = require("./init");

const DocumentModel = {
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    client: {
        type: String,
        required: true,
    },
};

// Schema for users of app
const DocumentSchema = new mongoose.Schema(DocumentModel, {strict: false});

module.exports = mongoose.model("documents", DocumentSchema);
