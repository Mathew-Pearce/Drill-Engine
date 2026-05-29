import type { System } from '../../engine/types/types';

export const distanceSystem: System = (state) => {
    if (!state.running) return state;

    return {
        ...state,
        distance: state.distance + 
        state.velocity,
    };
}; 