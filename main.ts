// Midnight Fridge Roast — make.fun entry (u-carbon-forge-midnight-fridge-roast-fc5d44a7)
// Writes one roast line to /output/entry.txt.
//
// The joke targets the fridge's petty midnight rule itself: it locks its own
// door and flashes WELLNESS MODE, as if a box of leftover pizza had any right
// to lecture its owner about discipline. No bouncer, no curfew angle — the
// punchline is the fridge appointing itself a wellness coach at midnight.
// Why WELLNESS MODE lands: the fridge isn't refusing you, it is performing
// virtue — flashing a gym-bro slogan on a screen that used to just show the
// temperature. The joke works because the authority is upside down: the thing
// lecturing you is a box of leftover pizza, the least disciplined object in
// the house, and it knows it. Midnight is the right hour for it because that
// is when the craving is real and the fridge's confidence is at its peak —
// nobody needs a wellness coach at noon, but at 00:00 the coach shows up.
// The 1–200c gate below is enforced with a hard throw, not a trim, because a
// trimmed roast loses its punchline; if the line ever grows past the gate, the
// program must fail loudly here instead of shipping a half-joke.
import { mkdirSync, writeFileSync } from "node:fs";

// The lock is the joke's engine, not its setup: a fridge that merely
// refused to open would be a broken appliance, but a fridge that locks
// itself has decided it knows better than its owner — the mechanism is
// the moral judgment. "Flashes" is the right verb because a flash is
// a performance, not a message: the fridge does not quietly say no, it
// puts on a light show so the whole dark kitchen can see you being
// disciplined. And the lecture inverts the relationship — the appliance
// exists to serve the human, yet here it grades the human, and the
// grade comes from a box that has never once resisted a slice itself.
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
