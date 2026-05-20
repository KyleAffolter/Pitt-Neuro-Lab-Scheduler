import QRCode from 'qrcode';
export default async function (req, res) {
 const url = 'https://example.com/checkin/123';
 const qr = await QRCode.toDataURL(url);
 res.send(qr);
}