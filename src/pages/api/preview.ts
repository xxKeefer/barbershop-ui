export default async function handler(req: any, res: any) {
    // Check if the user is requesting with valid token
    if (req.query.secret !== process.env.NEXT_PUBLIC_PREVIEW_SECRET) {
        return res.status(401).json({ message: 'Invalid token' })
    }

    // If all good we set preview cookies
    // And we redirect the user to the home page with preview mode enabled
    res.setPreviewData({})

    res.writeHead(307, { Location: '/' })
    res.end()
}
