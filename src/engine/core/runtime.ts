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

  function start() {

    running = true;

    interval = window.setInterval(
      tick,
      1000
    );
  }

  function stop() {

    running = false;

    clearInterval(interval);
  }


  function getState() {
    return currentState;
  }

  function subscribe(listener: Function) {
    listeners.push(listener);
  }

  return {
    start,
    stop,
    getState,
    subscribe,
    setRunning
  };
}
