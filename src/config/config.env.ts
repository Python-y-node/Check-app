import 'dotenv/config'
import { ConfigEnv } from './config.interface'
import { validationEnv } from './validation.env'

export const config: ConfigEnv = {
    
    env: process.env.NODE_ENV || 'dev',
    port: parseInt(process.env.PORT || '8080') , 
    dbUrl: process.env.DB_URL,
    dbE2E: process.env.DB_URL_E2E,
    jwtSecret: process.env.JWT_SECRET || '',
    googleSecret: process.env.SECRET_GOOGLE_CLIENT || '',
    googleClientId: process.env.GOOGLE_CLIENT_ID || ''

}

validationEnv(config)

