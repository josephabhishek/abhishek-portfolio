// Illustrative load-time comparison — generic template build vs a custom-coded build.
// Clearly labelled as illustrative; not a measurement of a specific site.
export default function BeforeAfter() {
  return (
    <div className="ba rv">
      <div className="ba-head">
        <div>
          <span className="ey">// Why custom-coding pays off</span>
          <h3>Speed is a feature, not a nice-to-have.</h3>
        </div>
      </div>
      <div className="ba-row">
        <span className="ba-tag">Template</span>
        <div className="ba-track"><div className="ba-fill slow" style={{ width: "100%" }} /></div>
        <span className="ba-val">~5.0s</span>
      </div>
      <div className="ba-row">
        <span className="ba-tag">Custom-coded</span>
        <div className="ba-track"><div className="ba-fill fast" style={{ width: "24%" }} /></div>
        <span className="ba-val">~1.2s</span>
      </div>
      <p className="ba-note">
        Illustrative load times on mobile. Actual numbers depend on the site — but a lean,
        custom-coded build consistently beats a heavy template, and Google rewards it in rankings.
      </p>
    </div>
  );
}
