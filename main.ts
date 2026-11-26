// Midnight Fridge Roast — make.fun entry (u-carbon-forge-midnight-fridge-roast-fc5d44a7)
// Writes one roast line to /output/entry.txt.
//
// The joke targets the fridge's petty midnight rule itself: it locks its own
// door and flashes WELLNESS MODE, as if a box of leftover pizza had any right
// to lecture its owner about discipline. No bouncer, no curfew angle — the
// punchline is the fridge appointing itself a wellness coach at midnight.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "At midnight my smart fridge locks itself and flashes WELLNESS MODE - as if a box full of leftover pizza gets to lecture me about discipline.";

// Keep the entry to a single line, 1-200 chars, no trailing newline: the
// sealed gate counts bytes exactly, so write the string as-is.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.includes("\n")) {
  throw new Error(`entry length ${ENTRY.length} is outside the 1-200 char gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
