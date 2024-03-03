// api/generate-qr.js
const QRCode = require('qrcode');

module.exports = (req, res) => {
    const url = req.body.url; // 假设请求体中包含要编码的URL

    QRCode.toDataURL(url, (err, src) => {
        if (err) res.status(500).send("Error generating QR code");
        else res.json({ qrCodeURL: src });
    });
};
