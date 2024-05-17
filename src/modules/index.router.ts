import { Application, Router } from "express";

import { userRouter } from "./User/router";
import { authRouter } from "./Auth/router";



export const RouterApi = ( app: Application )=>{

    const router = Router()

    router.use('/users', userRouter )
    router.use('/auth', authRouter )
    
    app.use('/api/v1', router )

}