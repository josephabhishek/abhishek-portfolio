import type { GscQuery, GscDevice } from "@/lib/projects";

export default function GscSnapshot({
  queries,
  devices,
  homePosition,
}: {
  queries: GscQuery[];
  devices: GscDevice[];
  homePosition?: number;
}) {
  return (
    <div className="snap">
      <div className="gsc-head">
        <span className="gsc-src">Search Console snapshot &middot; real query &amp; device data</span>
        {homePosition ? (
          <div className="gsc-stats">
            <span><b>{homePosition}</b> homepage position</span>
          </div>
        ) : null}
      </div>

      <div className="snap-grid">
        <div className="snap-q">
          <h4 className="snap-h">Top queries</h4>
          <div className="snap-table" role="table" aria-label="Top search queries">
            <div className="snap-tr snap-th" role="row">
              <span role="columnheader">Query</span>
              <span role="columnheader">Pos.</span>
              <span role="columnheader">CTR</span>
            </div>
            {queries.map((q) => (
              <div className="snap-tr" role="row" key={q.q}>
                <span role="cell" className="snap-query">{q.q}</span>
                <span role="cell" className="snap-pos">{q.position.toFixed(2)}</span>
                <span role="cell">{(q.ctr * 100).toFixed(1)}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="snap-d">
          <h4 className="snap-h">By device</h4>
          {devices.map((d) => (
            <div className="snap-dev" key={d.device}>
              <div className="snap-dev-top">
                <span>{d.device}</span>
                <span className="snap-dev-pos">pos {d.position.toFixed(1)}</span>
              </div>
              <div className="snap-bar">
                <div className="snap-bar-fill" style={{ width: `${Math.round(d.share * 100)}%` }} />
              </div>
              <div className="snap-dev-meta">
                {Math.round(d.share * 100)}% of clicks &middot; {(d.ctr * 100).toFixed(1)}% CTR
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
