import express from "express";
import multer from "multer";
import { fileService } from "../service";

const storage = multer.diskStorage({
  destination: "./store",
  filename: (_, { originalname }, cb) => cb(null, originalname),
});

const upload = multer({ storage });

export const fileRouter = express.Router();

fileRouter.get("/files", (_, res) => {
  res.send(fileService.list());
});

fileRouter.get("/file/:id", (req, res) => {
  try {
    res.send(fileService.get(req.params.id));
  } catch (e) {
    res.status(404).send(`File ${req.params.id} dose not exist`);
  }
});

fileRouter.get("/file/:id/download", (req, res) => {
  try {
    res.download(fileService.download(req.params.id));
  } catch (e) {
    res.status(404).send(`File ${req.params.id} dose not exist`);
  }
});

fileRouter.post("/file/upload", upload.single("file"), (req, res) => {
  res.redirect(req.header("Referer") || "/");
});
