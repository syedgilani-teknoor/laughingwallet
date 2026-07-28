import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";

// Reads content committed to the repo (videos, etc.) so pages can render it.
export const reader = createReader(process.cwd(), keystaticConfig);

// Pull a YouTube video ID out of any common YouTube URL shape.
export function youTubeId(url: string): string | null {
  if (!url) return null;
  const patterns = [
    /[?&]v=([^&]+)/, // watch?v=ID
    /youtu\.be\/([^?&/]+)/, // youtu.be/ID
    /\/embed\/([^?&/]+)/, // /embed/ID
    /\/shorts\/([^?&/]+)/, // /shorts/ID
  ];
  for (const re of patterns) {
    const m = url.match(re);
    if (m?.[1]) return m[1];
  }
  return null;
}
