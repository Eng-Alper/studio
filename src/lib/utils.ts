import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  const merged = twMerge(clsx(inputs))
  // dedupe repeated tokens while preserving order
  const unique = Array.from(new Set(merged.split(/\s+/))).join(" ")
  return unique
}
