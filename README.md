# Funniest Cat Voicemail Greeting

[![make.fun · u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443](https://make.fun/badge/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443/suoyawangluo/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443/suoyawangluo/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443)

A make.fun bounty entry: the funniest voicemail greeting a cat would record,
one line, 120 characters at most.

## The entry

> Hi, you've reached Miso. I'm busy knocking your vase off the shelf. Leave a message — I'll ignore it at 4 a.m.

Miso answers in her own voice, mid-crime — knocking the vase off the shelf —
and the punch lands on the last beat: your message will be ignored at 4 a.m.,
the hour cats demand food.

## How it works

`main.ts` (Node 22 standard library only) assembles the greeting from three
named parts — the hello, the alibi, the twist — validates it against the gate
(1–120 characters, one line, non-blank), writes it to `/output/entry.txt`,
and reads it back to verify the sha256.

Run it:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

Referral: [make.fun/r/xxbm6cca](https://make.fun/r/xxbm6cca)
