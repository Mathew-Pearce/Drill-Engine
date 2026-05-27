export type EngineState = {
    [key: string]: any;
};

export type System<T = EngineState> = (
    state: T
) => T;
