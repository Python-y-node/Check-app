import { Router, Request, Response, NextFunction } from 'express'

import passport from 'passport'
import { validateData } from '../../middlewares/validation.handle'
import { LoginUserSchema } from './dto/auth.dto'

export const authRouter = Router()


authRouter.post('/register', async ( req: Request, res: Response )=>{

})

authRouter.post('/login', 
validateData( 'body', LoginUserSchema ),
passport.authenticate( 'local', {session: false} ), 
async ( req: Request, res: Response, next: NextFunction )=>{

})

//authRouter.post('/google/login', )

authRouter.get('/google/register',
passport.authenticate('sign-up-google', { scope: ['profile', 'email'],session:false }))

