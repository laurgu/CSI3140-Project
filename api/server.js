const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config");
const cors = require("cors");
const server = express();
require("../api/models/init");

server.use(bodyParser.json());
server.use(cors({ credentials: false, origin: true }));

// Import and use the authRoutes.js for handling user registration and login
const authRoutes = require("./auth/authRoutes");
const documentsRoutes = require("./routes/documents"); // Adjust the path if needed

server.use(authRoutes);
server.use("/documents", documentsRoutes); // Mount the documents routes under /documents

server.use((error, req, res, next) => {
  res.json({
    error: {
      message: error.message,
    },
  });
});

server.listen(config.port, config.host, (error) => {
  if (error) {
    console.error("Error starting", error);
  } else {
    console.info("Express listening on port ", config.port);
  }
});
