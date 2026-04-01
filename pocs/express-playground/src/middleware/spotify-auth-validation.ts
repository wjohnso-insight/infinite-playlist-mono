import { NextFunction, Request, Response } from 'express'
import { z } from 'zod'

const spotifyCallbackQuerySchema = z.object({
  code: z.string().trim().min(1, 'Invalid or missing auth code'),
})

export const validateSpotifyCallbackQuery = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const parsed = spotifyCallbackQuerySchema.safeParse(req.query)

  if (!parsed.success) {
    return res.status(400).json({
      error: 'Invalid request query',
      details: parsed.error.flatten(),
    })
  }

  res.locals.spotifyCallbackQuery = parsed.data
  return next()
}