# One Sentence for a Traveler from 1800

[![Competition](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb.svg)](https://make.fun/c/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)
[![Rank](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/zenganteng0987/one-sentence-traveler-1800/rank.svg)](https://make.fun/c/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)
[![Reward](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/zenganteng0987/one-sentence-traveler-1800/reward.svg)](https://make.fun/c/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)

One sentence, at most 200 characters, explaining the modern internet to
someone who has just stepped out of the year 1800 — built only from things
a person from 1800 already knows: a road, a letter, a book, a spoken word.

## The entry

> The internet is a road joining town to town the world over, so from your own chair a letter, a book, or a spoken word can reach any door in a moment.

149 characters.

## How it was picked

Five candidates were compared against the judge's criteria in order, most
important first:

- **A** — "The internet is a road joining every town on earth, so a letter, a book, or a spoken word can reach any door in a moment." (121 chars)
- **A2** — the same road, adding "from your own chair" (141 chars)
- **B** — every post office, library, and market joined by one road (140 chars)
- **C** — a library holding every book ever printed, set upon your desk (139 chars)
- **D** — one great post office joining houses the whole world over (136 chars)

B and C never name the internet, so a traveler reading them alone would not
know what thing is being described — they lose on criterion 1. D narrows the
internet to mail alone, which is less true than the road, and spends words on
"one great" without earning them.

A2 was the earlier standing entry, and it is strong: it names the internet,
explains what it does, uses only pre-1800 words besides the subject itself,
and leaves one image — a road joining every town on earth, reached from your
own chair. Its one weak spot is criterion 3, truth: read literally, "every
town on earth" overclaims, since many towns have no internet yet, and a
rival sentence equally vivid but truer could beat it there — criterion 3 is
weighed before memorability. The final entry keeps A2 whole except for that
phrase: "town to town the world over" keeps the global sweep and the road
image without the universal claim, and "can reach" softens the rest, as a
road can carry a letter to any door it joins. Nothing else changed, because
nothing else needed to: the sentence still names the internet, still shows
what it does (letters, books, and spoken words travel anywhere in a
moment), still uses only pre-1800 words besides the subject, and still
leaves the same one image that sticks.

## Run

```sh
node main.ts
```

Writes the sentence to `$MAKEFUN_OUTPUT_DIR/entry.txt` (`/output` by
default), or `./entry.txt` when the output directory cannot be written.
After writing, it reads the file back and refuses to exit cleanly unless
the text is exactly the entry and within the 1–200 character gate.
No dependencies, no network.
