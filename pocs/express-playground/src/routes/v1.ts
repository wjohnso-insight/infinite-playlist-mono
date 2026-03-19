import { Router } from 'express';
import { healthcheckController } from '../controllers/v1/well-known';
import { spotifyCallbackController } from '../controllers/v1/spotify-controller';
import { spotifyLoginController } from '../controllers/v1/spotify-controller';

export const v1Router = Router()

v1Router.get('/healthcheck', healthcheckController)

v1Router.get('/auth/spotify/login', spotifyLoginController)

v1Router.get('/auth/spotify/callback', spotifyCallbackController)