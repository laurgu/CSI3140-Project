const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const server = express();

const { serverURL } = require("./config");
require("../api/models/init");

server.use(bodyParser.json());
server.use(cors({ credentials: false, origin: true }));

const authRoutes = require("./lambda/auth");
const documentsRoutes = require("./lambda/documents");
server.use("/.netlify/functions/auth", authRoutes);
server.use("/.netlify/functions/documents", documentsRoutes);

server.use((error, req, res) => {
  res.json({
    error: {
      message: error.message,
    },
  });
});

server.listen(serverURL.port, serverURL.host, (error) => {
  if (error) {
    console.error("Error starting", error);
  } else {
    console.info("Express listening on port ", serverURL.port);
  }
});
