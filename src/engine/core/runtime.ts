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

  type runtimeStatus = 
  | 'stopped'
  | 'running'
  | 'paused';

  let status: runtimeStatus = 'stopped'

  

  let tickRate = 1000;

  let interval: number | undefined;

  function setRunning(value: boolean) {
    running = value;
  }

  function setStatus(
    value: runtimeStatus
  ) {
    status = value;
  }

  function getStatus(){
    return status;
  }
  function setTickRate(value: number){
    tickRate = value;
  }

  function start() {

    if (interval)
      return;

    interval = window.setInterval(
      tick,
      tickRate
    );
  }

  function tick() {

    if (status !== 'running') return;

    systems.forEach(system => {

      currentState =
        system(currentState);
    });

    listeners.forEach(listener => {
      listener(currentState);
    });
  }

  function step(){
    tick();
  };

  
  function stop() {
  
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
    setStatus,
    getStatus,
    setRunning,
    getRunning,
    setTickRate,
    start,
    step,
    stop,
  };
}
