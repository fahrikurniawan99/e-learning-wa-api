const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
});

client.on("qr", (qr) => {
  console.log("🔑 Scan QR Code untuk login:");
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => console.log("✅ WhatsApp Client siap!"));

client.on("message_create", (message) => {
  if (message.body === "!ping") {
    message.reply("pong");
  }
});

client.initialize();

module.exports = client;
