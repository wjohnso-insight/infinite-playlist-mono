import { Request, Response } from 'express'
import { getToken } from '../../services/getToken'

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
    const code = res.locals.spotifyCallbackQuery.code as string

    try {

        const tokenData = await getToken(code)

        res.cookie('spotify_access_token', tokenData.access_token, {
            httpOnly: true,
            secure: false, // For production env, set to true
            maxAge: tokenData.expires_in * 1000
        })

        console.log(res.cookie)

        const userResponse = await fetch('https://api.spotify.com/v1/me', {
            headers: {
                Authorization: `Bearer ${tokenData.access_token}`,
            },
        })

        const profile = await userResponse.json()
        return res.status(200).json(profile)

    } catch (error) {
        return res.status(500).json({
            error: 'Unexpected error during Spotify callback',
            details: error instanceof Error ? error.message : 'Unknown error',
        })
    }
}