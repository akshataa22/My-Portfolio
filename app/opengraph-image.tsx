import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name}, ${profile.role} based in ${profile.location}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#faf6ee",
          color: "#2b2118",
        }}
      >
        <div style={{ display: "flex", fontSize: 32, color: "#b0432c" }}>Hey there, welcome in!</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", fontSize: 110, fontWeight: 700, letterSpacing: -3 }}>
            Hi, I&apos;m&nbsp;<span style={{ color: "#b0432c" }}>{profile.firstName}</span>
          </div>
          <div style={{ display: "flex", fontSize: 44, color: "#65554a" }}>
            {profile.role} · React, Next.js, Java & Spring Boot
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "#65554a" }}>
          <span>{profile.location}</span>
          <span
            style={{
              display: "flex",
              padding: "8px 24px",
              borderRadius: 999,
              background: "#5f6f38",
              color: "#faf6ee",
            }}
          >
            Open to work
          </span>
        </div>
      </div>
    ),
    size,
  );
}
