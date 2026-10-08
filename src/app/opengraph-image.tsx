import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Cores da paleta (globals.css); aqui não há CSS variables.
const ink = "#14161c";
const teal = "#2496ab";
const orange = "#d9622b";
const bone = "#ece8d4";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          backgroundColor: teal,
          color: ink,
          border: `16px solid ${ink}`,
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 4 }}>
          ID: LC-2026 // STATUS: ONLINE
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 120,
              fontWeight: 900,
              lineHeight: 1,
              textTransform: "uppercase",
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              marginTop: 32,
              padding: "12px 24px",
              fontSize: 36,
              backgroundColor: ink,
              color: bone,
              boxShadow: `10px 10px 0 0 ${orange}`,
            }}
          >
            {site.role}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
