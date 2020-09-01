require("dotenv").config();

const config = {
  databaseUrl: {
    prod: process.env.MONGODB_PROD_URL,
    dev: process.env.MONGODB_DEV_URL,
  },
  jwtSecret: process.env.JWT_SECRET,
};

module.exports = config;
