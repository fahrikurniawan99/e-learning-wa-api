const express = require("express");
const dotenv = require("dotenv");
const handler = require("./src/handler");
const { default: config } = require("./src/config");

dotenv.config();

const app = express();
const PORT = config.port;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/send", handler.sendMessage);

app.post("/send-activation-link", handler.sendActivationLink);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
