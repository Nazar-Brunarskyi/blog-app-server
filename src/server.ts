import express from "express";

const PORT = 8080;

const app = express();

app.use('/', (req, res) => {
  res.send('done')
})

app.listen(PORT, () => {
  console.log(`server has been started on http://localhost:${PORT}/`);
})