export type EngineState = {
    [key: string]: any;
};

export type System<T = EngineState> = (
    state: T
) => T;

export type RuntimeConfig = {

    defaultTickRate: number;
  
    fastForwardRate: number;
  };

export type RuntimeStatus = 
| 'stopped'
| 'running'
| 'paused';
