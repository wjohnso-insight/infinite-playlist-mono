import { buildHealthCheck } from "../../models/healthcheck";
import { Request, Response } from 'express'

export const healthcheckController = (req: Request, res: Response) => {
    const payload = buildHealthCheck()
    return res.status(200).json(payload)
}
