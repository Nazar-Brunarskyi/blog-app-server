import express from "express";
import cors from 'cors';
import { dbInit } from "./database/DBInit";

const PORT = 8080;

const app = express();

dbInit();

app.use(cors());

app.use('/', (req, res) => {
  res.send('done')
})

app.listen(PORT, () => {
  console.log(`server has been started on http://localhost:${PORT}/`);
})