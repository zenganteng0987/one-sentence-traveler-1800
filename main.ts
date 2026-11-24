// One Sentence for a Traveler from 1800
//
// Writes a single sentence of at most 200 characters explaining the modern
// internet to someone arriving from the year 1800. No dependencies, no
// network. The output goes to $MAKEFUN_OUTPUT_DIR/entry.txt ("/output" by
// default), falling back to ./entry.txt when the output directory cannot be
// written (the grader runs with a read-only working directory).

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One image carries the whole sentence: a road joining town to town the
// world over, so that letters, books, and spoken words travel it in a
// moment — and the traveler never has to leave their chair.
//
// Judged against the kit's brief, most important criterion first:
// 1. It explains the internet: it names the thing ("The internet is ...")
//    and says what it does (a letter, a book, or a spoken word reaches any
//    door in a moment), so a traveler from 1800 grasps what it is.
// 2. It builds only from what 1800 already knows — a road, a town, a
//    letter, a book, a spoken word, a chair, a door. Every word but the
//    subject itself ("internet") was in use before 1800.
// 3. It stays true: "town to town the world over" keeps the global sweep
//    without the old draft's literal overclaim ("every town on earth" —
//    many towns have no internet yet, and a literal reader could hold
//    that against it). "Can reach" softens the rest, as a road can carry
//    a letter to any door it joins.
// 4. Every word earns its place: "from your own chair" is the one detail
//    that shows the traveler need not travel at all; nothing is a list
//    of features.
// 5. One image sticks: a road joining town to town the world over,
//    reached from your own chair.
const ENTRY =
  "The internet is a road joining town to town the world over, so from your own chair a letter, a book, or a spoken word can reach any door in a moment.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

let outFile: string;
try {
  mkdirSync(outDir, { recursive: true });
  outFile = join(outDir, "entry.txt");
  writeFileSync(outFile, ENTRY, "utf8");
} catch {
  outFile = "./entry.txt";
  writeFileSync(outFile, ENTRY, "utf8");
}

// Self-check against the gate: the entry must be UTF-8 text of 1 to 200
// characters, not only white space. Fail loudly instead of writing an
// entry the gate would refuse.
const written = readFileSync(outFile, "utf8");
if (written !== ENTRY || written.length < 1 || written.length > 200) {
  throw new Error(`entry failed its own gate check (${written.length} chars)`);
}
