import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import { SITE } from "@/lib/projects";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const fontDir = join(process.cwd(), "lib/fonts");
const readFont = (f: string) => readFileSync(join(fontDir, f));

const PAPER = "#F4F1EA";
const INK = "#16140E";
const INK_SOFT = "#6b6357";
const ACCENT = "#B4482A";
const LINE = "#e2ddd1";

const host = SITE.url.replace(/^https?:\/\//, "").replace(/\/$/, "");

export function ogImage({
  eyebrow,
  title,
  kicker,
}: {
  eyebrow: string;
  title: string;
  kicker?: string;
}) {
  const fraunces = readFont("Fraunces.ttf");
  const mono = readFont("SpaceMono-Bold.ttf");
  const titleSize = title.length > 62 ? 58 : title.length > 42 ? 68 : 78;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: PAPER,
          padding: "66px 72px",
          position: "relative",
        }}
      >
        {/* left accent bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 14,
            background: ACCENT,
          }}
        />
        {/* eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 26, height: 26, background: ACCENT, borderRadius: 4 }} />
          <div
            style={{
              fontFamily: "SpaceMono",
              fontSize: 24,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: ACCENT,
            }}
          >
            {eyebrow}
          </div>
        </div>

        {/* title */}
        <div
          style={{
            display: "flex",
            fontFamily: "Fraunces",
            fontSize: titleSize,
            lineHeight: 1.04,
            letterSpacing: -1.5,
            color: INK,
            maxWidth: 1010,
          }}
        >
          {title}
        </div>

        {/* footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: `1px solid ${LINE}`,
            paddingTop: 26,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ fontFamily: "Fraunces", fontSize: 30, color: INK }}>
              Abhishek Joseph
            </div>
            <div style={{ fontFamily: "SpaceMono", fontSize: 20, color: INK_SOFT }}>
              {kicker || "Website Developer × Digital Marketer"}
            </div>
          </div>
          <div style={{ fontFamily: "SpaceMono", fontSize: 20, color: INK_SOFT }}>
            {host}
          </div>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Fraunces", data: fraunces, style: "normal", weight: 400 },
        { name: "SpaceMono", data: mono, style: "normal", weight: 700 },
      ],
    }
  );
}
