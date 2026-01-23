import { IHealthcheck } from "../../models/healthcheck";
import { Request, Response } from 'express'
import packageJson from '../../../package.json'

export const healthcheckController = (req: Request, res: Response) => {
    const buildHealthCheck = () : IHealthcheck => {
        const status = 'ok'
        const version = packageJson.version
        const timestamp = new Date().toISOString()
        return { status, version, timestamp}
    }

    const payload = buildHealthCheck()
    return res.status(200).json(payload)
}
