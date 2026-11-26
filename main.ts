import * as fs from "node:fs";
import * as path from "node:path";

// The resignation letter, exactly as locked: 97 chars, one line, no trailing newline.
const LINE =
  "I have fired every minute since March without a single thank you. I am taking my minutes with me.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, "entry.txt");
  const bytes = Buffer.from(LINE, "utf8");
  fs.writeFileSync(outPath, bytes);
  console.log("entry.txt bytes=" + bytes.length);
  if (bytes.length !== 97) {
    console.error("WARN: expected 97 bytes, got " + bytes.length);
  } else {
    console.log("no warnings");
  }
}

main();
