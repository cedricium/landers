"use client";

import { useDemoMode } from "@/hooks/useDemoMode";

export default function Demo({ autoplay = true }: { autoplay?: boolean }) {
  useDemoMode({ autoplay });
  return null;
}
