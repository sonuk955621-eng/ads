// api/config.js
export default function handler(req, res) {
  res.status(200).json({
    webhookUrl: process.env.WEBHOOK_URL || '',
    adsterraId: process.env.ADSTERRA_ID || ''
  });
}
