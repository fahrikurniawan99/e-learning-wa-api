const express = require("express");
const handler = require("./src/handler");
const config = require("./src/config");

const app = express();
const PORT = config.port;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/send", handler.sendMessage);

app.post("/send-activation-link", handler.sendActivationLink);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
