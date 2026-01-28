import { HealthcheckResponse } from "../../models/healthcheck";
import { Request, Response } from 'express'
import packageJson from '../../../package.json'
import { HttpStatus } from "../../models/Http";

export const healthcheckController = (req: Request, res: Response) => {
    const payload: HealthcheckResponse = {
        status: HttpStatus.OK,
        version: packageJson.version,
        timestamp: new Date().toISOString()
    }

    return res.status(200).json(payload)
}
