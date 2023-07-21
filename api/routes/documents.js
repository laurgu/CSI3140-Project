const express = require("express");
const router = new express.Router();
const Document = require("../models/document");

router.get("/documents", async (req, res, next) => {
    try {
        const title = req.query.title || "";
        const _id = req.query._id || "";
        const client = req.query.client || "";

        let documents;
        if (_id !== "") {
            console.log("HIT GET BY ID");
            documents = await Document.findById(_id);
        } else {
            documents = await Document.find({
                title: {$regex: "" + title, $options: "i"},
                client: {$regex: "" + client, $options: "i"},
            });
        }

        console.log(_id);
        console.log("\n\nNew Request");
        console.log(req.originalUrl);
        console.log(req.query);
        console.log(documents);

        res.json(documents);
    } catch (error) {
        console.log("Errors in GET: ");
        console.log(error);
        next(error);
    }
});

router.put("/documents", async (req, res, next) => {
    try {
        console.log("HIT PUT");
        console.log(req.body);
        const filter = {_id: req.body._id};
        const update = req.body;
        const options = {
            upsert: true,
            new: true,
        };
        if (!req.body._id) {
            delete req.body._id;
            console.log("Creating new document")
            await Document.create(req.body);
        } else {
            console.log("Updating document " + req.body._id)
            await Document.findOneAndUpdate(filter, update, options);
        }
    } catch (error) {
        console.log("Errors in PUT: ");
        console.log(error);
    }
});

router.get("/recent", async (req, res, next) => {
    try {
        let documents = await Document.find({}).sort({_id: -1}).limit(5);
        res.json(documents);
        console.log("\n\nNew Request for Recent Documents");
        console.log(documents);
    } catch (error) {
        console.log("Errors in GET: ");
        console.log(error);
        next(error);
    }
});


module.exports = router;
