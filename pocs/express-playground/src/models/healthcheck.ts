import packageJson from '../../package.json'

export interface IHealthcheck {
    status: string
    version: string
    timestamp: string
}

export const buildHealthCheck = (): IHealthcheck => {
    const status = 'ok'
    const version = packageJson.version
    const timestamp = new Date().toISOString()
    return { status, version, timestamp}
}