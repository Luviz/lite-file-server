import "./fileCard.css";

export type FileCardProps = {
  name: string;
  onDownloadSuccess?: () => void;
};

export function FileCard({ name }: FileCardProps) {
  return (
    <div
      className={"file-card"}
      onClick={() => {
        const anchor = document.createElement('a');
        anchor.href = `/api/file/${name}/download`;
        anchor.click();
        anchor.remove();
      }}
    >
      <span>{name}</span>
    </div>
  );
}
