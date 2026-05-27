# Drill-Engine
# Modular Simulation Engine

A lightweight TypeScript simulation engine focused on strict separation between:

- execution
- orchestration
- simulation logic
- game interaction

This project began as an experiment in decoupling game logic from engine architecture after discovering that tightly interwoven gameplay systems become increasingly difficult to refactor, extend, and reason about over time.

The goal is to build a highly modular runtime that can power:

- games
- simulations
- procedural systems
- replay systems
- editor tooling
- debugging tools
- progression systems
- narrative systems

without the engine itself depending on game-specific behaviour.

---

# Core Philosophy

The engine is divided into distinct responsibility layers:

```text
GAME
  expresses intent

CONTROLS
  orchestrate behaviour

RUNTIME
  executes simulation

SYSTEMS
  transform state

Runtime Is Pure Execution

The runtime should only understand:

ticking
scheduling
execution state
subscriptions
state ownership

The runtime does not understand:

- gameplay
- UI
- input
- pause semantics
- replay systems
- debugging
- save states

It is intentionally treated as a machine.

Controls Are The Orchestration Layer

Controls act as the interface between the game and the runtime.

Examples:

start
stop
pause
resume
step
fast forward
rewind

Controls may later orchestrate:

- event emission
- debugger hooks
- replay systems
- snapshots
- multiplayer authority
- editor tooling

without polluting runtime execution logic.

Systems Transform State

Systems are pure state transformers.

A system receives state and returns updated state.

Example: 

state => {
  state.distance += 1;
  return state;
}

Systems should remain isolated from:

runtime internals
UI
controls
orchestration logic

Current Project Structure
src/

  engine/
    core/
      runtime.ts

    controls/
      start.ts
      stop.ts
      pause.ts
      resume.ts

    types/

  game/
    systems/
    state/

Current Features

-modular runtime loop
-isolated systems architecture
-control orchestration layer
-runtime state subscriptions
-pause/resume/start/stop controls
-protected interval scheduling
-strict runtime/game separation

Long-Term Goals

-Runtime

-deterministic ticking
-scheduler abstraction
-configurable tick rates
-simulation stepping
-timescale control

Controls

-fast forward
-rewind
-stepping
-replay recording
-snapshot systems
-debugger integration

Systems

- procedural progression
- milestone/rules engine
- narrative systems
- dialogue systems
- quest systems
- simulation chains

Development Status

Early prototype / architecture phase.

Current focus is establishing clean foundational boundaries before introducing higher-level gameplay systems.


[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/Mathew-Pearce/Drill-Engine)