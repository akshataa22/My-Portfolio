import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          fontSize: 22,
          fontWeight: 700,
          letterSpacing: -1,
        }}
      >
        {profile.firstName[0]}
      </div>
    ),
    size,
  );
}
