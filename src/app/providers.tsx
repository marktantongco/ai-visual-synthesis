"use client";

import { PromptProvider } from "@/lib/PromptContext";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <PromptProvider>
      {children}
    </PromptProvider>
  );
}
