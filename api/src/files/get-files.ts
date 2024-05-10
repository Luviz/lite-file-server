import express from "express"; 
import { fileService } from "../service";

export const fileRouter = express.Router();


fileRouter.get("/files", (_, res) => {
  res.send(fileService.list());
})

fileRouter.get("/file/:id", (req, res) => {
  try {
    res.send(fileService.get(req.params.id));
  } catch (e) {
    res.status(404).send(`File ${req.params.id} dose not exist`)
  }
})

fileRouter.get("/file/:id/download", (req, res) => {
  try {
    res.download(fileService.download(req.params.id));
  } catch (e) {
    res.status(404).send(`File ${req.params.id} dose not exist`)
  }
})