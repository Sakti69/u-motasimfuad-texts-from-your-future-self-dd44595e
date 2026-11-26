// Texts From Your Future Self entry (Node 22, standard library only):
// writes exactly one text message — under 200 characters, a single line,
// no trailing newline — to /output/entry.txt, the file the gate and the
// judge read. Outside the grader's container, MAKEFUN_OUTPUT_DIR stands
// in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// v1: the future self warns about becoming a "well, actually" person at
// parties, and texts from the timeline where that stopped — the twist is
// that the better timeline is the one with friends in it.
// v2 (revision, after running v1): "It has friends in it" states the
// payoff flatly; "People actually like you here" says the same thing with
// a voice — warmer, more specific, and it lands the contrast between the
// two timelines instead of just naming it. Length stays well under 200.
const ENTRY =
  "Future you. In 2031 you become a 'well, actually' person at parties. I'm texting from the timeline where you stopped. People actually like you here. Choose wisely.";

const length = [...ENTRY].length;
if (length < 1 || length > 200 || !/\S/.test(ENTRY) || ENTRY.includes("\n")) {
  throw new Error(
    `entry is ${length} characters; the gate needs 1 to 200, a single line, with a non-space character`,
  );
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), ENTRY, "utf8");
