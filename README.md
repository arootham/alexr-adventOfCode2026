# Advent of Code 2026

JavaScript solutions, one folder per day: `dayNN/solution.js`, with `example.txt` (the puzzle's sample) and `input.txt` (my input, not committed) beside it.

## Working in Zed

Open the folder with `zed ~/alexr-adventOfCode2026`. Files save themselves.

| Key | What it does |
| --- | --- |
| `alt-n` | New day: creates the next `dayNN` and opens its three files |
| `alt-e` | Run the open day against `example.txt` |
| `alt-r` | Run the open day against `input.txt` |
| `alt-s` | Ship: commit the open day and push it |
| `F9` | Toggle a breakpoint on the current line |
| `F4` | Start debugging: pick "Debug on example" or "Debug on input" |
| `F5` | Continue, or rerun the last debug session |
| `F10` / `F11` / `shift-F11` | Step over / into / out |
| `shift-F5` | Stop debugging |

The `alt-` keys are bound in `~/.config/zed/keymap.json`; the tasks they run are in `.zed/tasks.json`, and the debug configurations in `.zed/debug.json`.

From a terminal: `node day01/solution.js` or `node day01/solution.js example.txt`.
