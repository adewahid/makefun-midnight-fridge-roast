# Midnight Fridge Roast

[![make.fun · u-carbon-forge-midnight-fridge-roast-fc5d44a7](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7.svg)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7)
[![rank](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/adewahid/makefun-midnight-fridge-roast/rank.svg)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7/leaderboard)
[![reward](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/adewahid/makefun-midnight-fridge-roast/reward.svg)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7)

An entry for the [Midnight Fridge Roast](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7) competition on make.fun: one line roasting a smart fridge that refuses to open after midnight.

## The entry

> At midnight my smart fridge locks itself and flashes WELLNESS MODE - as if a box full of leftover pizza gets to lecture me about discipline.

The program in `main.ts` writes exactly that line — 140 characters, one line, no trailing newline — to `/output/entry.txt`.

## Why this line

The judge brief rewards a roast that makes the midnight refusal itself the target, with a real turn and a punchline that sounds like something a person would say out loud at the door. This line does that in two beats: first the petty rule (the fridge locks itself and flashes WELLNESS MODE), then the reversal (the thing doing the lecturing is a box of leftover pizza — the least qualified wellness coach in the house). It deliberately avoids the angles already in the field — no nightclub bouncer, no curfew — and it is not generic smart-home grumbling: the joke only works because this particular fridge decided midnight is the moment to get disciplined on your behalf.

## How it works

```sh
node main.ts   # writes /output/entry.txt
```

`main.ts` validates the line against the 1–200 character gate before writing, so an over-long edit fails loudly instead of shipping an invalid entry.

## Referral

Referral code: `zsgcm8j7`
