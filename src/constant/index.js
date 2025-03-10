const activationMessage = (name, link) =>
  `👋 *Halo ${name}*,\n\n` +
  `Terima kasih telah mendaftar. Klik link berikut untuk mengaktifkan akun Anda:\n${link}\n\n` +
  `_Link ini berlaku selama 1 jam._\n` +
  `Salam hangat,\nTim Support 🚀`;

module.exports = {
  activationMessage,
};
