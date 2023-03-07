import { Request, Response } from "express"
import * as userServices from './services'



export const syncUser = async (req: Request, res: Response) => {
  const { displayName, uid } = req.body

  try {
    await userServices.syncUser(displayName, uid);
  } catch (err) {
    res.sendStatus(500);
    console.log(2);
    
    return;
  }

  res.send(true);
}