const express = require("express");
const router = new express.Router();
const Document = require("../models/document");

router.get("/documents", async (req, res, next) => {
  try {
    const title = req.query.title || "";
    const id = req.query.id || "";

    let documents;
    if (req.query.id) {
      documents = await Document.findById(id);
    } else {
      documents = await Document.find({
        title: { $regex: "" + title, $options: "i" },
      });
    }

    console.log("\n\nNew Request");
    console.log(req.originalUrl);
    console.log(req.query);
    console.log(documents);

    res.json(documents);
  } catch (error) {
    next(error);
  }
});

router.put("/documents", async (req, res, next) => {
  try {
    console.log("HIT PUT");
    console.log(req.body);
    const filter = { _id: req.body._id };
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
      console.log("Updating existing document")
      await Document.findOneAndUpdate(filter, update, options);
    }
  } catch (error) {
    console.log("Errors in PUT: ");
    console.log(error);
  }
});

module.exports = router;
