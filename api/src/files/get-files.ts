import express from "express"; 
import { fileService } from "../service";

export const fileRouter = express.Router();


fileRouter.get("/files", (_, res) => {
  res.send(fileService.list());
})

fileRouter.get("/file/:id", (req, res) => {
  res.send(fileService.get(req.params.id));
})