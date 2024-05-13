import { signal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import { FileCard } from "./file-card";
import "./app.css";

const files = signal<string[]>([]);

export function App() {
  useEffect(() => {
    fetch("/api/files")
      .then((r) => r.json())
      .then((f) => (files.value = f));
  }, []);

  return (
    <>
      <h1>Lite file server</h1>
      <form
        action="/api/file/upload"
        method="post"
        enctype="multipart/form-data"
      >
        <input type="file" name="file" id="file-loc" />
        <input type="submit" value="Submit" />
      </form>
      <div className="list-container">
        {files.value.map((f) => (
          <FileCard name={f} />
        ))}
      </div>
    </>
  );
}
