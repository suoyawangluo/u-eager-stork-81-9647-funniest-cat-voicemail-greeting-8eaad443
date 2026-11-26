// Funniest Cat Voicemail Greeting — u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443
// A cat's voicemail: she answers in her own voice, mid-crime, and the punch
// lands on the last beat — the message will be ignored at 4 a.m., cat o'clock.
//
// The greeting is built from named parts so each beat is deliberate:
// the hello, the alibi (knocking the vase off the shelf), and the twist
// (the caller's message gets ignored at 4 a.m. — the hour cats demand food).
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

const PARTS = {
  hello: "Hi, you've reached Miso.",
  alibi: "I'm busy knocking your vase off the shelf.",
  twist: "Leave a message — I'll ignore it at 4 a.m.",
};

function buildEntry() {
  return [PARTS.hello, PARTS.alibi, PARTS.twist].join(" ");
}

// Gate: UTF-8 text, 1 to 120 characters, not only white space, one line.
function validateEntry(text) {
  const chars = [...text].length;
  const report = { chars, lines: text.split("\n").length, ok: true, reason: "" };
  if (chars < 1 || chars > 120) {
    report.ok = false;
    report.reason = `length ${chars} outside 1-120`;
  } else if (!text.trim()) {
    report.ok = false;
    report.reason = "blank";
  } else if (report.lines !== 1) {
    report.ok = false;
    report.reason = "not a single line";
  }
  return report;
}

function verifyWritten(path, expected) {
  const written = readFileSync(path, "utf8");
  const sha256 = createHash("sha256").update(written, "utf8").digest("hex");
  return { matches: written === expected, sha256, written };
}

function main() {
  const entry = buildEntry();
  const gate = validateEntry(entry);
  if (!gate.ok) throw new Error(`gate failed: ${gate.reason}`);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, entry, "utf8");
  const check = verifyWritten(outPath, entry);
  if (!check.matches) throw new Error("read-back mismatch");
  console.log(
    `gate passes: ${gate.chars} characters, ${gate.lines} line, sha256 ${check.sha256}`,
  );
  console.log(`verified: ${JSON.stringify(check.written)}`);
}

main();
