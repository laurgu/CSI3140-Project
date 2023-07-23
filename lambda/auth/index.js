// lambda/auth/index.js
const authRoute = require("./authRoute");
exports.handler = authRoute;

// Lambda handler function for the auth routes
exports.handler = async (event, context) => {
  try {
    // Execute the auth route file's middleware and logic
    const result = await authRoutes(event, context);
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
