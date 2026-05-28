import type { System, EngineState } from '../types/types';

type RuntimeOptions = {
  state: EngineState;
  systems: System[];
  config: RuntimeConfig;
};

export function createRuntime({
  state,
  systems,
  config,
}: RuntimeOptions) {

  let currentState =
    structuredClone(state);

  const listeners: Function[] = [];

  type runtimeStatus = 
  | 'stopped'
  | 'running'
  | 'paused';

  let status: runtimeStatus = 'stopped';

  const runtimeConfig =
  structuredClone(config);

  function getConfig(): Runtimeconfig{
    return runtimeConfig;
  }

  let tickRate = 1000;

  let interval: number | undefined;

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

  function getTickRate() {

    return tickRate;
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

  function reset(){
    currentState = 
      structuredClone(state);
  }

  function getState() {
    return currentState;
  }

  function subscribe(listener: Function) {
    listeners.push(listener);
  }

  return {
    getConfig,
    getState,
    subscribe,
    setStatus,
    getStatus,
    getTickRate,
    setTickRate,
    start,
    step,
    stop,
    reset,
  };
}
