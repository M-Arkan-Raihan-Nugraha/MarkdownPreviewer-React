import { useMemo, useState } from "react";
import DOMPurify from "dompurify";
import { marked } from "marked";
import MarkdownEditor from "./components/MarkdownEditor";
import MarkdownPreview from "./components/MarkdownPreview";
import "./App.css";

const initialMarkdown = `# Markdown Previewer

## Tulis markdown di sebelah kiri

Kamu bisa membuat **teks tebal**, _teks miring_, daftar, tautan, dan blok kode.

- Preview diperbarui otomatis
- HTML hasil markdown disanitasi
- Layout responsif untuk layar kecil

\`\`\`js
const message = "Halo React!";
console.log(message);
\`\`\``;

function App() {
  const [text, setText] = useState(initialMarkdown);

  const previewHtml = useMemo(() => {
    const html = marked.parse(text || "", { breaks: true });
    return DOMPurify.sanitize(html);
  }, [text]);

  return (
    <main className="container">
      <MarkdownEditor
        value={text}
        onChange={setText}
        onReset={() => setText(initialMarkdown)}
      />
      <MarkdownPreview html={previewHtml} />
    </main>
  );
}

export default App;
