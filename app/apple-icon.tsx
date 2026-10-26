import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#faf6ee",
          color: "#b0432c",
          fontSize: 120,
          fontWeight: 700,
          letterSpacing: -4,
        }}
      >
        {profile.firstName[0]}
      </div>
    ),
    size,
  );
}
