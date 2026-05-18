"use client";

import { useState } from "react";

export function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  function handleClick() {
    navigator.clipboard.writeText("leahchung99@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <button
      onClick={handleClick}
      className="inline-block px-5 py-2.5 border border-[var(--foreground)] rounded-full text-sm hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors cursor-pointer"
    >
      {copied ? "Copied!" : "Email me →"}
    </button>
  );
}
