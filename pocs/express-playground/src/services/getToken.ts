import { SpotifyTokenResponse } from "../models/spotify"

export const getToken = async (code: string): Promise<SpotifyTokenResponse> => {

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

    if (!tokenResponse.ok) {
        throw new Error('Failed to fetch Spotify token')
    }

    return tokenResponse.json() as Promise<SpotifyTokenResponse>
}