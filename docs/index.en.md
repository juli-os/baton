<!-- 手写翻译：本页是 README（即 docs/index.md）的英文手写翻译，不参与 docs:gen 生成；README 变更时需人工同步更新本页。 -->

# @juli-os/baton

juli-os infrastructure: a terminal remote control (zero npm dependencies).

baton ships remote-control capability only: session control over the tmux / herdr dual backends (create sessions, send text, capture panes, kill sessions), submit confirmation and queue delivery, PTY attach, and orthogonal backend factories (six per-backend concerns: terminal / hookSpecs / listSync / attach / bootCommand / applyEnv). It carries no juli business concepts (CC hook injection semantics, the dispatch pipeline, and snapshots live in [@juli-os/agents](https://github.com/juli-os/agents), which depends on this package internally and re-exports it outward without changing the interface).

## Why it exists

Remote control is pure capability; dispatch is business. After the split (step 6 of the 2026-11-12 architecture adjustment):

- Anyone can use baton (people who only want to drive a terminal do not have to drag in dispatch semantics);
- agents focuses on the dispatch pipeline (dispatch / snapshot / hooks / skills), and the terminal component now depends on baton;
- A new terminal backend (a third workspace manager) touches only baton's adapter layer. The engine and the dispatch pipeline change zero lines.

The hook command group (CC injection semantics) stays in agents. baton's backend factory takes a `hookSpecs` factory injection and defaults to an empty group. After agents wraps and injects its own `defaultHookSpecs`, the behavior matches the original verbatim.

## Usage

```ts
import { createTmuxClient, createAgentBackend, createHerdrClient } from '@juli-os/baton';

const tmux = createTmuxClient({});                        // default socket (optional socketPath)
await tmux.newSession('juli-reply', '/work');             // create a session
const sent = await tmux.sendTextConfirmed('juli-reply', 'task text');  // Result<SubmitStats>
const pane = await tmux.capturePane('juli-reply', 2000);  // Result<string>

const backend = createAgentBackend({ backend: 'herdr', herdrSession: 'juli' }); // tmux|herdr orthogonal factory
await backend.terminal.newSession('juli-dev', '/work');   // same TmuxClient contract
```

Interfaces return `Result` — errors are values, not exceptions. Callers at the port boundary decide how to degrade.

## CLI

```
baton list [--socket=/path]                  # list tmux session names (default socket)
baton capture --session=NAME [--lines=40]    # capture the tail of a session pane to stdout
```

One command, one action. Every command calls the package's own exported functions.

## Docs

This repo's docs are generated passively: `npm run docs:gen` (README mirror + architecture diagram + typedoc API). CI checks that the generated output does not drift.

License: Apache-2.0
