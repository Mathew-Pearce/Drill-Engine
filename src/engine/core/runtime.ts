import type {
  System,
  EngineState,
  RuntimeStatus,
  RuntimeConfig,
} from '../types/types';

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

  // =========================
  // Runtime State
  // =========================

  let status: RuntimeStatus = 'stopped';

  let currentState =
    structuredClone(state);

  let tickRate = 1000;

  let interval: number | undefined;

  const listeners: Function[] = [];

  const runtimeConfig =
    structuredClone(config);

  // =========================
  // Accessors
  // =========================

  function getStatus() {
    return status;

  }

  function notifyListeners(){
    listeners.forEach(
      listener =>
        listener(currentState)
    );
  }

  function setStatus(
    value: RuntimeStatus
  ) {
  
    status = value;
  
    notifyListeners();
  }

  function getTickRate() {
    return tickRate;
  }

  function setTickRate(value: number) {
    tickRate = value;

    if (interval) {
      restartLoop();
    }
  }

  function getConfig(): RuntimeConfig {
    return runtimeConfig;
  }

  function getState() {
    return currentState;
  }

  // =========================
  // Core Simulation
  // =========================

  function processSystems() {

    currentState.events =
      [];
  
    systems.forEach(system => {
  
      currentState =
        system(currentState);
    });
  
    notifyListeners();
  }

  function tick() {

    if (status !== 'running')
      return;

    processSystems();
  }

  // =========================
  // Execution Control
  // =========================
  function haltScheduler(){
    clearInterval(interval);

    interval = undefined;
  }

  function startScheduler() {
    if(interval)
     return;

     interval = window.setInterval(
      tick,
      tickRate
     )
  }
  

  function start() {
    startScheduler();
  }

  function restartLoop(){
    haltScheduler()

    startScheduler();
  }


  function stop() {

    clearInterval(interval);

    interval = undefined;
  }

  // =========================
  // Manual Control
  // =========================

  function step() {

    processSystems();
  }

  // =========================
  // State Lifecycle
  // =========================

  function reset() {

    currentState =
      structuredClone(state);
  }

  // =========================
  // Observers
  // =========================

  function subscribe(listener: Function) {

    listeners.push(listener);
  }

  // =========================
  // Public API
  // =========================

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
