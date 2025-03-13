const dotenv = require("dotenv");
dotenv.config();

const config = {
  activationLink: process.env.ACTIVATION_LINK,
  port: process.env.APP_PORT || 3000,
};

module.exports = config;
