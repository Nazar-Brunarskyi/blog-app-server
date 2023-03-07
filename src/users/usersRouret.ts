import express from 'express';
import * as userControllers from './controllers'

const userRouter = express.Router();
// userRouter.get('/check', userControllers.justGet);

userRouter.post('/sync', userControllers.syncUser);

export default userRouter;