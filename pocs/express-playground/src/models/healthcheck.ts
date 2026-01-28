import { HttpStatus } from "./Http"
import { DefaultResponse } from "./Http"

export type HealthcheckResponse = DefaultResponse & {
    status: HttpStatus
    version: string
    timestamp: string
}