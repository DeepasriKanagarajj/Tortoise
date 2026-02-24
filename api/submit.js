export default async function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ 
            success: false, 
            error: 'Method not allowed' 
        });
    }

    try {
        const { email } = req.body;
        
        if (!email || !email.includes('@')) {
            return res.status(400).json({ 
                success: false, 
                error: 'Valid email required' 
            });
        }

        // For now, just return success without database
        return res.status(200).json({ 
            success: true, 
            message: 'Thanks for signing up! 🐢'
        });

    } catch (error) {
        return res.status(500).json({ 
            success: false, 
            error: 'Something went wrong' 
        });
    }
}
