// A Shorter Interval — the cron job that has fired every minute since
// March hands in its one-line resignation letter.
//
// Contract (competition kit): write exactly one text to /output/entry.txt.
// The gate requires UTF-8, 1-140 characters, not only white space. The
// file holds the line alone: no quotes around it, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I have fired every minute since March, and the only raise I ever got was a shorter interval.";

// Self-enforce the competition gate before writing anything: the entry
// must be UTF-8 text of 1 to 140 characters, not only white space.
// Refuse loudly instead of shipping an invalid file.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry line is ${LINE.length} characters, gate needs 1-140`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry line is only white space");
}
if (Buffer.from(LINE, "utf8").toString("utf8") !== LINE) {
  throw new Error("entry line is not clean UTF-8");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
