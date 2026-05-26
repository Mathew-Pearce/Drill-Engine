import type { System } from '../../engine/types';

export const distanceSystem: System = (state) => {
    if (!state.running) return state;

    return {
        ...state,
        distance: state.distance + state.speed,
    };
}; 