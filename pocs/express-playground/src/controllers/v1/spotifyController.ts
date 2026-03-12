import { Request, Response } from 'express'
import { SpotifyTokenResponse } from '../../models/spotify'

export const spotifyLoginController = (req: Request, res: Response) => {
    const params = new URLSearchParams({
        response_type: 'code',
        client_id: process.env.SPOTIFY_CLIENT_ID!,
        redirect_uri: process.env.SPOTIFY_REDIRECT_URI!,
        scope: 'user-read-private user-read-email',
        show_dialog: 'true'
    })

    return res.redirect(`https://accounts.spotify.com/authorize?${params.toString()}`)
}

export const spotifyCallbackController = async (req: Request, res: Response) => {
    const code = req.query.code

    // Type checking for code variable
    if (typeof(code) != 'string' || code.trim() == '') {
        return res.status(400).json({ error: 'Invalid or missing auth code'})
    }

    try {
        const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            Authorization:
                'Basic ' +
                Buffer.from(
                    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
                ).toString('base64'),
            },
            body: new URLSearchParams({
                grant_type: 'authorization_code',
                code,
                redirect_uri: process.env.SPOTIFY_REDIRECT_URI ?? '',
            }),
        })

    const tokenData = (await tokenResponse.json()) as SpotifyTokenResponse

    const userResponse = await fetch('https://api.spotify.com/v1/me', {
        headers: {
            Authorization: `Bearer ${tokenData.access_token}`,
        },
    })

    const profile = await userResponse.json() 
    return res.status(200).json(profile)
    
    } catch(error) {
        return res.status(500).json({ 
            error: 'Unexpected error during Spotify callback', 
            details: error instanceof Error ? error.message: 'Unknown error',
        })
    }}
