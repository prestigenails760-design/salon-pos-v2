import { setCors } from './_shared.js';

export default function handler(req, res) {
  setCors(req, res);
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  return res.status(200).json({
    ready: Boolean(process.env.GHL_API_TOKEN && process.env.GHL_LOCATION_ID),
    hasToken: Boolean(process.env.GHL_API_TOKEN),
    hasLocationId: Boolean(process.env.GHL_LOCATION_ID)
  });
}
