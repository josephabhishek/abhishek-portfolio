import type { GscPoint } from "@/lib/projects";

// Editorial proof chart — daily average Google position (lower = better, top of page)
// with impressions behind it. Built from real Search Console export data.
// Colors use CSS variables so it adapts to light / dark themes.
export default function GscChart({ data }: { data: GscPoint[] }) {
  const VW = 760, VH = 340;
  const mL = 52, mR = 22, mT = 28, mB = 62;
  const pW = VW - mL - mR;
  const pH = VH - mT - mB;
  const n = data.length;
  const step = pW / (n - 1);
  const x = (i: number) => mL + i * step;

  const posMin = 1, posMax = 3;
  const yPos = (p: number) => mT + ((Math.min(Math.max(p, posMin), posMax) - posMin) / (posMax - posMin)) * pH;

  const imprMax = Math.max(...data.map((d) => d.impressions));
  const barMaxH = pH * 0.62;
  const baseY = mT + pH;

  const linePath = data
    .map((d, i) => `${i === 0 ? "M" : "L"} ${x(i).toFixed(1)} ${yPos(d.position).toFixed(1)}`)
    .join(" ");

  const avgPos = (data.reduce((s, d) => s + d.position, 0) / n).toFixed(1);
  const peakCtr = (Math.max(...data.map((d) => d.ctr)) * 100).toFixed(1);

  const INK = "var(--ink)", ACC = "var(--accent)", MUT = "var(--muted)", LINE = "var(--line)", BARS = "var(--line-2)", CARD = "var(--card)";

  return (
    <figure className="gsc" aria-label="MIJMAAN Google Search performance chart">
      <div className="gsc-head">
        <span className="gsc-src">Google Search Console &middot; mijmaan.com &middot; first 8 days live</span>
        <div className="gsc-stats">
          <span><b>{avgPos}</b> avg. position</span>
          <span><b>{peakCtr}%</b> peak CTR</span>
          <span><b>1.63</b> homepage position</span>
        </div>
      </div>
      <svg viewBox={`0 0 ${VW} ${VH}`} role="img" preserveAspectRatio="xMidYMid meet">
        <title>Average Google position stayed near the top of page 1 across the first week live.</title>
        {[1, 2, 3].map((p) => (
          <g key={p}>
            <line x1={mL} x2={VW - mR} y1={yPos(p)} y2={yPos(p)} style={{ stroke: LINE }} strokeWidth={1} strokeDasharray={p === 1 ? "0" : "3 4"} />
            <text x={mL - 12} y={yPos(p) + 4} textAnchor="end" fontFamily="var(--mono)" fontSize="12" style={{ fill: MUT }}>{p}</text>
          </g>
        ))}
        {data.map((d, i) => {
          const h = (d.impressions / imprMax) * barMaxH;
          const bw = Math.min(step * 0.42, 26);
          return <rect key={i} x={x(i) - bw / 2} y={baseY - h} width={bw} height={h} rx={2} style={{ fill: BARS }} opacity={0.75} />;
        })}
        <path d={linePath} fill="none" style={{ stroke: INK }} strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" />
        {data.map((d, i) => (
          <circle key={i} cx={x(i)} cy={yPos(d.position)} r={4} style={{ fill: ACC, stroke: CARD }} strokeWidth={1.5} />
        ))}
        {data.map((d, i) => (
          <text key={i} x={x(i)} y={VH - 30} textAnchor="middle" fontFamily="var(--mono)" fontSize="11" style={{ fill: MUT }}>{d.date}</text>
        ))}
        <g fontFamily="var(--mono)" fontSize="11.5">
          <circle cx={mL + 4} cy={VH - 10} r={4} style={{ fill: ACC }} />
          <text x={mL + 16} y={VH - 6} style={{ fill: INK }}>Avg. position (lower = top of page)</text>
          <rect x={mL + 300} y={VH - 15} width={11} height={11} rx={2} style={{ fill: BARS }} />
          <text x={mL + 318} y={VH - 6} style={{ fill: INK }}>Impressions</text>
        </g>
      </svg>
    </figure>
  );
}
