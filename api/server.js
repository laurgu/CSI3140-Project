const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const server = express();
const authRoutes = require("./routes/authRoutes");
const documentsRoutes = require("./routes/documents");
const {serverURL} = require("./config"); // Adjust the path if needed
require("../api/models/init");

server.use(bodyParser.json());
server.use(cors({credentials: false, origin: true}));
server.use(authRoutes);
server.use(documentsRoutes); // Mount the documents routes under /documents

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
