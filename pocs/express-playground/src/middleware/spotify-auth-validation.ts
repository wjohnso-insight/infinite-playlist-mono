import { NextFunction, Request, Response } from 'express'
import { z } from 'zod'

const spotifyCallbackQuerySchema = z.object({
  code: z.string().trim().min(1, 'Invalid or missing auth code'),
})

export type spotifyCallbackQuery = z.infer<typeof spotifyCallbackQuerySchema>

declare module 'express' {
  interface locals {
    spotifyCallbackQuery?: spotifyCallbackQuery
  }
}

export const validateSpotifyCallbackQuery = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const parsed = spotifyCallbackQuerySchema.safeParse(req.query)

  if (!parsed.success) {
      res.status(400).json({
      error: 'Invalid request query',
      details: parsed.error.flatten(),
    })
    return
  }

  res.locals.spotifyCallbackQuery = parsed.data
  next()
}