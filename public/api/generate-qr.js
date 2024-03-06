const QRCode = require('qrcode');

module.exports = async (req, res) => {
    const { data } = req.body;
    try {
        const qr = await QRCode.toDataURL(curl https://helloar2.vercel.app/api/generate-qr
);
        res.status(200).send({ qr });
    } catch (error) {
        res.status(500).send({ error: 'Failed to generate QR code' });
    }
};
