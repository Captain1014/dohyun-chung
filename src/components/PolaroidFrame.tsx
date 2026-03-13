"use client";

import { ReactNode } from "react";

interface PolaroidFrameProps {
  children: ReactNode;
  className?: string;
}

export function PolaroidFrame({ children, className = "" }: PolaroidFrameProps) {
  return (
    <div
      className={`relative w-full max-w-sm bg-[#fafaf9] p-2 pb-8 shadow-[0_8px_24px_rgba(0,0,0,0.4)] -rotate-2 transition-transform hover:rotate-0 ${className}`}
    >
      {children}
    </div>
  );
}
