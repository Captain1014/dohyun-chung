import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: "#0a0a0a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18">
          {/* 4-pointed compass star */}
          <path
            d="M9 0 L10.4 7.6 L18 9 L10.4 10.4 L9 18 L7.6 10.4 L0 9 L7.6 7.6 Z"
            fill="white"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
