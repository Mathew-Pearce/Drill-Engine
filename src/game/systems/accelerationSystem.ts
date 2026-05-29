export function accelerationSystem(state){
    return {

        ...state,

        velocity:
            (state.velocity + 
            state.acceleration) * 
            0.98,
    };
}