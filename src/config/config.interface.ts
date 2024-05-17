

export interface ConfigEnv {
    env: string
    port: number
    dbUrl?: string
    dbE2E?: string
    jwtSecret: string
    googleSecret: string
    googleClientId: string
}