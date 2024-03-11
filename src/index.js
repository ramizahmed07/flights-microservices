const express = require("express");
const apiRoutes = require("./routes");
const { serverConfig, logger } = require("./config");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(serverConfig.port, () => {
  console.log(`Server is up and running on port: ${serverConfig.port}`);
  logger.info("Server started successfully");
});
