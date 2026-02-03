import { Router } from 'express';
import { healthcheckController } from '../controllers/v1/well-known';

export const v1Router = Router()

v1Router.get('/healthcheck', healthcheckController)