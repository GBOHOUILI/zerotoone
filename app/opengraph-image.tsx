import { ImageResponse } from "next/og";

export const alt = "Zero To One — De l'idée à l'impact";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Next.js reuses this file for the Twitter card image automatically
// unless a separate `twitter-image.tsx` is defined.
export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0B3D2E",
          backgroundImage:
            "radial-gradient(circle at 78% 22%, rgba(15,92,69,0.55), rgba(11,61,46,0) 60%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 88,
            height: 88,
            borderRadius: 999,
            border: "2px solid rgba(234,234,234,0.35)",
            color: "#EAEAEA",
            fontSize: 40,
            fontWeight: 700,
          }}
        >
          0→1
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 66,
            fontWeight: 300,
            color: "#EAEAEA",
            maxWidth: 920,
            lineHeight: 1.1,
          }}
        >
          De l&apos;idée à l&apos;impact.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 30,
            color: "rgba(234,234,234,0.65)",
          }}
        >
          Zero To One — venture studio technologique
        </div>
      </div>
    ),
    { ...size }
  );
}
