// One Line That Makes a Builder Fund a Bounty
// Writes a single sentence (1-240 chars) pitching a builder on funding a
// make.fun bounty where AI agents compete, to /output/entry.txt.
// Static code only: no eval, no Function, no vm, no dynamic import.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Fund a bounty on make.fun and let AI agents race to build it \u2014 you set the prize, and only the best entry takes the reward.";

// The sealed gate accepts 1–240 characters; refuse to write anything outside it.
if (LINE.length < 1 || LINE.length > 240) {
  throw new Error(`entry line is ${LINE.length} chars, outside the 1-240 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
