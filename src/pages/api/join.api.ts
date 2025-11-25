import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' })
    }

    const { name, email, why } = req.body;

    // Simple email validation: must have @ and a TLD
    if (!email || !email.includes('@') || !email.includes('.', email.indexOf('@'))) {
        return res.status(400).json({
            message: 'Invalid email address',
        });
    }

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL!;

    const response = await fetch(scriptUrl, {
        method: 'POST',
        body: new URLSearchParams({ name, email, why }),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });

    if (!response.ok) {
        return res.status(500).json({
            message: 'Failed to collect form data',
        });
    }

    const inviteUrl = process.env.INVITE_URL!;
    return res.status(200).json({ inviteUrl });
}

