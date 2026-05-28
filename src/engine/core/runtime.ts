import type { System, EngineState, RuntimeStatus } from '../types/types';

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

  let status: RuntimeStatus = 'stopped';

  let currentState =
    structuredClone(state);
  
  let tickRate = 1000;

  let interval: number | undefined;

  const listeners: Function[] = [];

  const runtimeConfig =
  structuredClone(config);

  function getStatus(){
    return status;
  }

  function setStatus(
    value: runtimeStatus
  ) {
    status = value;
  }

  function getTickRate() {
    return tickRate;
  }

  function setTickRate(value: number){
    tickRate = value;
  }

  function getConfig(): RuntimeConfig{
    return runtimeConfig;
  }

  function getState() {
    return currentState;
  }

  function tick() {

    if (status !== 'running') return;

    systems.forEach(system => {

      currentState =
        system(currentState);
    });

  function start() {

    if (interval)
      return;

    interval = window.setInterval(
      tick,
      tickRate
    );
  }

    function stop() {
  
    clearInterval(interval);

    interval = undefined;
  }

    listeners.forEach(listener => {
      listener(currentState);
    });
  }

  function start() {
     if (interval) return; 
     interval = window.setInterval( tick, tickRate ); 
    }

    function stop() { 
      clearInterval(interval); 
      interval = undefined; 
    }
  
  function step(){
    tick();
  };

  function reset(){
    currentState = 
      structuredClone(state);
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
