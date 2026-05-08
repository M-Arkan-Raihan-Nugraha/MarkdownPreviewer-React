function MarkdownPreview({ html }) {
  return (
    <section className="preview-side" aria-labelledby="preview-title">
      <div className="panel-header">
        <h2 id="preview-title">Preview</h2>
      </div>

      <article
        className="preview-box"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </section>
  );
}

export default MarkdownPreview;
