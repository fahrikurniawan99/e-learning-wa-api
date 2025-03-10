const config = require("../config");
const constant = require("../constant");
const client = require("../service/wa-web");

const sendMessage = async (req, res) => {
  const { number, message } = req.body;
  const chatId = `${number}@c.us`;

  try {
    await client.sendMessage(chatId, message);
    res.json({ status: "success", message: "Pesan terkirim!" });
  } catch (err) {
    res.status(500).json({ status: "error", error: err.message });
  }
};

const sendActivationLink = async (req, res) => {
  const { number, name, token } = req.body;

  if (!number || !name) {
    return res
      .status(400)
      .json({ status: "error", message: "Nomor dan nama wajib diisi." });
  }

  const link = `${config.activationLink}?token=${token}`;
  const chatId = `${number.replace(/\D/g, "")}@c.us`;
  const message = constant.activationMessage(name, link);

  try {
    await client.sendMessage(chatId, message);
    res.json({
      status: "success",
      message: "✅ Link aktivasi berhasil dikirim!",
      token,
      error: "",
    });
  } catch (err) {
    console.error("🚨 Error:", err);
    res.status(500).json({
      status: "error",
      message: "❌ Gagal mengirim pesan.",
      error: err.message,
      token: "",
    });
  }
};

module.exports = {
  sendMessage,
  sendActivationLink,
};
