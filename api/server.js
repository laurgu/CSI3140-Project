const express = require("express");
const bodyParser = require("body-parser");

const config = require("./config");
const cors = require("cors");
const server = express();

server.use(bodyParser.json());
server.use(cors({ credentials: false, origin: true }));
server.use([require("./routes/documents")]);

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
