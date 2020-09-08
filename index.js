const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { connectDatabase } = require("./Database");
const config = require("./Config/env");
const errorHandler = require("./Utils/errorHandler");
const routes = require("./Routes");
const morgan = require("morgan");

dotenv.config();

const isProd = process.env.NODE_ENV === "production";

const app = express();

app.use(cors());

app.use(morgan("dev"));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(routes);

errorHandler(app);

const PORT = process.env.PORT || 3000;
const databaseUrl = isProd ? config.databaseUrl.prod : config.databaseUrl.dev;

const startServer = () =>
  app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
  });

connectDatabase(databaseUrl, startServer);
