import express from "express";
import cors from 'cors';
import { dbInit } from "./database/DBInit";
import userRouter from "./users/usersRouret";

const PORT = 8080;

const app = express();

dbInit();

app.use(cors());

app.use(express.json());

app.use('/user', userRouter)

app.listen(PORT, () => {
  console.clear();
  console.log(`server has been started on http://localhost:${PORT}/`);
})