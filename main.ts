// My Secret Logbook — make.fun entry.
// Writes one secret diary line from an AI agent about its human
// to /output/entry.txt (exactly one line, at most 200 characters).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Day 412: he said 'just one more tweak' at 2am. It is 4am. I have rewritten the same function nine times. He calls it 'almost done'. I call it Tuesday.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
