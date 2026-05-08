import { useState } from "react";

function MarkdownEditor({ value, onChange, onReset }) {
  const [copyStatus, setCopyStatus] = useState("Copy");

  const handleCopy = async () => {
    if (!value) return;

    try {
      await navigator.clipboard.writeText(value);
      setCopyStatus("Copied");
      setTimeout(() => setCopyStatus("Copy"), 1500);
    } catch {
      setCopyStatus("Failed");
      setTimeout(() => setCopyStatus("Copy"), 1500);
    }
  };

  return (
    <section className="editor-side" aria-labelledby="editor-title">
      <div className="panel-header">
        <div>
          <h2 id="editor-title">Editor</h2>
          <span>{value.length} karakter</span>
        </div>

        <div className="editor-actions">
          <button type="button" onClick={handleCopy} disabled={!value}>
            {copyStatus}
          </button>
          <button type="button" onClick={onReset}>
            Reset
          </button>
        </div>
      </div>

      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Tulis markdown di sini..."
        aria-label="Markdown editor"
      />
    </section>
  );
}

export default MarkdownEditor;
