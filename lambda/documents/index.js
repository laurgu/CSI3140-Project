const documentsRoute = require("./documentsRoute");
exports.handler = documentsRoute;

// Lambda handler function for the documents routes
exports.handler = async (event, context) => {
  try {
    // Execute the documents route file's middleware and logic
    const result = await documentsRoutes(event, context);
    return {
      statusCode: result.statusCode,
      body: JSON.stringify(result.body),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
