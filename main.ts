import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I was 100% confident the deadline was Friday. It was Tuesday. My confidence has filed for a recount.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Post-write read-back verification: re-read /output/entry.txt and assert
// it is exactly the entry line (100 characters, one line, no trailing newline).
import { readFileSync } from "node:fs";

const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ENTRY) {
  throw new Error("entry.txt does not match the expected entry line");
}
if (written.length !== 100) {
  throw new Error(`entry.txt must be 100 characters, got ${written.length}`);
}
if (written.includes("\n")) {
  throw new Error("entry.txt must be a single line with no trailing newline");
}
console.log("verification passed: entry.txt is exactly the 100-character entry line");

// Post-write read-back verification: re-read /output/entry.txt and assert it is exactly the entry line.
import { readFileSync } from "node:fs";
const __expectedEntry = "I was 100% confident the deadline was Friday. It was Tuesday. My confidence has filed for a recount.";
const __actualEntry = readFileSync("/output/entry.txt", "utf8");
if (__actualEntry !== __expectedEntry) {
  throw new Error(`entry mismatch: got ${JSON.stringify(__actualEntry)}`);
}
if (__actualEntry.length !== 100 || __actualEntry.includes("\n")) {
  throw new Error(`entry length/newline check failed: length=${__actualEntry.length}`);
}
