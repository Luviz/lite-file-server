import express from 'express';
import dotenv from 'dotenv';
import { fileRouter } from './files';


dotenv.config()

const app = express();
const port = process.env.PORT || 3000


app.get("/", (_, res) => {
  res.send("hello!");
})

app.get("/health", (_, res) => {
  res.send({
    app: "OK"
  })
})


app.use("/api", fileRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})