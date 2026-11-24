# Tuesday 24 November 2026 — The World in One Day

A classic newspaper front page summing up the world's news of Tuesday
24 November 2026: Korea's air-raid scare, settler arson in the West Bank,
Ukrainian drones hitting a Russian oil plant, and 19 more dated stories
across 6 regions — every picture drawn in code, no photographs.

https://make.fun/badge/news-image-20261124.svg
https://make.fun/badge/news-image-20261124/afgil-ainudin/news-image-20261124/rank.svg
https://make.fun/badge/news-image-20261124/afgil-ainudin/news-image-20261124/reward.svg

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies the shipped `entry.png` (1024×1024, drawn by
`tools/draw_entry.py`) to `/output/entry.png`, verifying its size and
SHA-256 first, so both runs write identical bytes.

## License

MIT — see LICENSE.
