const app = require("../server/server.js"); // path updated
const serverless = require("serverless-http");

module.exports = serverless(app);
