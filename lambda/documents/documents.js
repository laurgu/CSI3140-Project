const express = require("express");
const router = new express.Router();
const Document = require("../../api/models/document");

const jwt = require("jsonwebtoken");
const config = require("../../api/config");

const authenticateUser = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Missing authorization token" });
  }

  try {
    req.user = jwt.verify(token, config.JWTSecret);
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid authorization token" });
  }
};

router.get("/documents", authenticateUser, async (req, res, next) => {
  try {
    const title = req.query.title || "";
    const _id = req.query._id || "";
    const client = req.query.client || "";

    let documents;
    if (_id !== "") {
      console.log("Get ID: " + _id);
      documents = await Document.findById(_id);
    } else {
      documents = await Document.find({
        title: { $regex: "" + title, $options: "i" },
        client: { $regex: "" + client, $options: "i" },
      });
    }

    console.log("New Request");

    res.json(documents);
  } catch (error) {
    console.log("Errors in GET: ");
    console.log(error);
    next(error);
  }
});

router.put("/documents", authenticateUser, async (req, res, next) => {
  try {
    console.log("HIT PUT: " + req.body._id);
    const filter = { _id: req.body._id };
    const update = req.body;
    const options = {
      upsert: true,
      new: true,
    };
    if (!req.body._id) {
      console.log("Creating new document");
      const temp = "Untitled" + Math.floor(Math.random() * 1000);
      req.body.title = req.body.title || temp;

      await Document.create(req.body);
      const newdoc = await Document.findOne({ title: req.body.title }).exec();
      console.log("New document: ");
      if (req.body.title === temp) {
        const update = { title: newdoc._id };
        const filter = { _id: newdoc._id };
        await Document.findByIdAndUpdate(filter, update);
      }
      req.body._id = newdoc._id;
    } else {
      console.log("Updating document " + req.body._id);
      await Document.findOneAndUpdate(filter, update, options);
    }

    res.send({
      _id: req.body._id,
    });
  } catch (error) {
    console.log("Errors in PUT: ");
    console.log(error);
  }
});

router.delete("/documents/:_id", authenticateUser, async (req, res, next) => {
  try {
    await Document.deleteOne({ _id: req.params._id });
    res.sendStatus(200);
    console.log("Deleted document " + req.params._id);
  } catch (error) {
    console.log("Errors in DELETE: ");
    console.log(error);
  }
});

router.get("/recent", authenticateUser, async (req, res, next) => {
  try {
    let documents = await Document.find({}).sort({ _id: -1 }).limit(5);
    res.json(documents);
    console.log("New Request for Recent Documents");
    console.log("New Request for Recent Documents");
  } catch (error) {
    console.log("Errors in GET: ");
    console.log(error);
    next(error);
  }
});

module.exports = router;
