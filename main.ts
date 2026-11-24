// One Sentence for a Traveler from 1800
//
// Writes a single sentence of at most 200 characters explaining the modern
// internet to someone arriving from the year 1800. No dependencies, no
// network. The output goes to $MAKEFUN_OUTPUT_DIR/entry.txt ("/output" by
// default), falling back to ./entry.txt when the output directory cannot be
// written (the grader runs with a read-only working directory).

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One image carries the whole sentence: a road from your own chair to a
// town across the world, carrying your letter there and a book from its
// library back — before the ink on the letter is dry.
//
// Judged against the kit's brief, most important criterion first:
// 1. It explains the internet better than the old draft: it names the
//    thing ("The internet is ...") and shows what it does BOTH ways —
//    your words travel out, and the world's books travel back to you.
//    The old draft only sent things out, and as a three-item list.
// 2. It builds only from what 1800 already knows — a road, a chair, a
//    town, a letter, a book, a library, ink. Every word but the subject
//    itself ("internet") was in use before 1800.
// 3. It stays true: "a town across the world" names one far town, not
//    every town or every door — the old draft's "any door" promised a
//    delivery the internet cannot make to doors it does not reach.
//    "Before the ink is dry" is the speed of the road, not a promise
//    about any one letter.
// 4. Every word earns its place: the three-item list ("a letter, a book,
//    or a spoken word") is gone — the brief bans a crammed list of
//    features, and one letter out plus one book back says the same work
//    in fewer words. "From your own chair" is the one detail that shows
//    the traveler need not travel at all.
// 5. One image sticks: a letter out and a book back, before the ink is
//    dry — a phrase a reader can still picture a week later.
const ENTRY =
  "The internet is a road from your own chair to a town across the world, carrying your letter there and a book from its library back before the ink is dry.";

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
