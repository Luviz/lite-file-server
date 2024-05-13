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
  },[]);

  return (
    <>
      <h1>Lite file server</h1>
      <div className="list-container">
        {files.value.map((f) => (
          <FileCard name={f} />
        ))}
      </div>
    </>
  );
}
