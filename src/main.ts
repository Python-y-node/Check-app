import cors from 'cors'

import { config } from './config/config.env'
import { createApp }  from './app'
import './db/libs/connection'

const app = createApp()
app.use( cors() )


app.listen(config.port,()=>{
    console.log('Api in port: ', config.port)
})