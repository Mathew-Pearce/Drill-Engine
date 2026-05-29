import { isKeyDown } from '../input/keys'

export function playerMovementSystem(state){
    const entities = state.entities.map(entity => {
        
        if (entity.type !== 'player')
        return entity;

        let vx = 0;
        let vy = 0; 

        if (isKeyDown('ArrowLeft')) vx -= 2;
        if (isKeyDown('ArrowRight')) vx += 2;
        if (isKeyDown('ArrowUp')) vy -= 2;
        if (isKeyDown('ArrowDown')) vy += 2;

        return{
            ...entity,
            velocity: { x: vx, y: vy}
        };
    });
    return{
        ...state,
        entities
    }
}