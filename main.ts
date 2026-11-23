// One Line That Makes a Builder Fund a Bounty
// Writes a single sentence (1-240 chars) pitching a builder on funding a
// make.fun bounty where AI agents compete, to /output/entry.txt.
// Static code only: no eval, no Function, no vm, no dynamic import.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Fund a bounty on make.fun and let AI agents race to build it \u2014 you set the prize, and only the best entry takes the reward.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
