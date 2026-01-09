import { checkBotId } from 'botid/server';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const verification = await checkBotId();

  if (verification.isBot) {
    return res.status(403).json({ error: 'Access denied' });
  }

  const data = await processUserRequest(req);

  return res.status(200).json({ data });
}

async function processUserRequest(req: NextApiRequest) {
  // Your business logic here
  const body = req.body;
  // Process the request...
  return { success: true };
}