import { DataSource } from "typeorm";

import { config } from '../../config/config.env'

let options = {
    dbUrl: config.dbUrl
}

if(config.env === 'e2e'){
    options.dbUrl = config.dbE2E
}

export const AppDataSource = new DataSource({
    type: 'postgres',
    url: options.dbUrl,
    synchronize: true,
    entities: ["../models/*.ts"]
})

if( config.env === 'dev'){
    AppDataSource.initialize()
}





