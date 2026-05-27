import type { System, EngineState } from '../types/types';

type RuntimeOptions = {
  state: EngineState;
  systems: System[];
};

export function createRuntime({
  state,
  systems,
}: RuntimeOptions) {

  let currentState =
    structuredClone(state);

  const listeners: Function[] = [];

  let interval: number | undefined;

  let running = false;

  function setRunning(value: boolean) {
    running = value;
  }

  function beginLoop() {

    if (interval)
      return;

    interval = window.setInterval(
      tick,
      1000
    );
  }

  function tick() {

    if (!running) return;

    systems.forEach(system => {

      currentState =
        system(currentState);
    });

    listeners.forEach(listener => {
      listener(currentState);
    });
  }

  
  function haltLoop() {
  
    clearInterval(interval);

    interval = undefined;
  }

  function getState() {
    return currentState;
  }

  function subscribe(listener: Function) {
    listeners.push(listener);
  }

  return {
    getState,
    subscribe,
    setRunning,
    beginLoop,
    haltLoop,
  };
}
