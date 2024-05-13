import { readdirSync, statSync, existsSync } from "fs";

const filePath = (id: string) => `store/${id}`;
const testFile = (path: string) => {
  const t = existsSync(path);
  if (!t) {
    throw Error("file dose not exist!");
  }
};

export const fileService = {
  list: () => {
    const files = readdirSync("store");
    return files;
  },
  get: (id: string) => {
    const path = filePath(id);
    testFile(path);
    const file = statSync(path);
    return { id, ...file };
  },
  download: (id: string) => {
    const path = filePath(id);
    testFile(path);
    return path;
  },
};
