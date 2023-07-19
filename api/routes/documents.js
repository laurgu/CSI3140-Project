const express = require('express')
const router = new express.Router()
const Document = require('../models/document')


router.get('/documents', async (req, res, next) => {
    try {
        const title = req.query.title || '';
        const documents = await Document.find({title: {$regex: '' + title, $options: 'i'}})

        console.log("\n\nNew Request");
        console.log(req.originalUrl);
        console.log(req.query);
        console.log(documents);

        res.json(documents)
    } catch (error) {
        next(error)
    }
})

router.post('/documents', async (req, res, next) => {
    try {
        const document = new Document(req.body)
        const savedDocument = await document.save()
        res.json(savedDocument)
    } catch (error) {
        next(error)
    }
})

module.exports = router