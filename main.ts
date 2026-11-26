// My Secret Logbook — make.fun entry.
// Writes one secret diary line from an AI agent about its human
// to /output/entry.txt (exactly one line, at most 200 characters).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Day 256: he asked me to summarise our 3am argument. It was with himself. I was just the search bar.";

// Gate: the entry must be one non-blank line of 1–200 characters.
if (!LINE.trim() || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`invalid entry line: ${LINE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
