import { createHash } from "node:crypto";
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The front page for Tuesday 24 November 2026, drawn in code by
// tools/draw_entry.py and shipped in this repository as entry.png.
// This program only copies it to the output directory, so both runs
// write exactly the same bytes.
const EXPECTED_SHA256 =
  "b26eaf9292b96801d18bc5c1a5a0ce0bf5e8880e98519b58e1377217f52ec9c4";
const EXPECTED_SIZE = 190532;

const repoDir = dirname(fileURLToPath(import.meta.url));
const source = join(repoDir, "entry.png");
const data = readFileSync(source);

if (data.length !== EXPECTED_SIZE) {
  throw new Error(
    `entry.png has ${data.length} bytes, expected ${EXPECTED_SIZE}`,
  );
}
const actual = createHash("sha256").update(data).digest("hex");
if (actual !== EXPECTED_SHA256) {
  throw new Error(`entry.png sha256 mismatch: got ${actual}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "entry.png"));
console.log(`wrote ${join(outDir, "entry.png")} (${data.length} bytes)`);
