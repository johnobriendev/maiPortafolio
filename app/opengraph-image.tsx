import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Mailen Ichochea";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FDF6F0",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        {/* Blush orb top-right */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(242, 167, 176, 0.3)",
          }}
        />
        {/* Gold orb bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -60,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(201, 149, 108, 0.2)",
          }}
        />

        {/* Gold top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "#C9956C",
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: 96,
            fontWeight: 900,
            color: "#2D1B2E",
            letterSpacing: "-2px",
            lineHeight: 1,
            textAlign: "center",
          }}
        >
          MAILEN
        </div>
        <div
          style={{
            fontSize: 96,
            fontWeight: 900,
            color: "#C9956C",
            letterSpacing: "-2px",
            lineHeight: 1,
            textAlign: "center",
          }}
        >
          ICHOCHEA
        </div>

        {/* Tagline */}
        <div
          style={{
            marginTop: 24,
            fontSize: 24,
            color: "#7A5A7A",
            letterSpacing: "4px",
            textTransform: "uppercase",
          }}
        >
          Beauty · Lifestyle · Self-Care {/* TODO: Customize */}
        </div>
      </div>
    ),
    { ...size }
  );
}
