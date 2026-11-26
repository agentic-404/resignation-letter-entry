import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The retry loop's one-line resignation letter.
const LINE =
  "I have retried 12,000 times. The server is never coming back, and neither am I.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Gate: the entry must be UTF-8 text of 1-140 characters.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 140) {
  throw new Error(`entry length ${chars.length} outside 1-140 characters`);
}
// The gate also requires a single line that is not whitespace-only.
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be whitespace-only");
}

writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
