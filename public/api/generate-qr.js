// /api/generate-qr.js
const express = require('express');
const QRCode = require('qrcode');
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

app.post('*', async (req, res) => {
    try {
        const { data } = req.body; // Data to encode in the QR code, adjust according to your needs
        const qrCodeUrl = await QRCode.toDataURL(data);
        res.status(200).send({ url: qrCodeUrl });
    } catch (error) {
        res.status(500).send({ error: "Error generating QR code" });
    }
});

module.exports = app;
