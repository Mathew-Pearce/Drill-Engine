import { isKeyDown } from '../input/keys'
import { normalize } from '../utils/normalize'

export function playerMovementSystem(state){
    const entities = state.entities.map(entity => {
        
        if (entity.type !== 'player')
        return entity;

        let vx = 0;
        let vy = 0; 

        if (isKeyDown('ArrowLeft')) vx -= 1;
        if (isKeyDown('ArrowRight')) vx += 1;
        if (isKeyDown('ArrowUp')) vy -= 1;
        if (isKeyDown('ArrowDown')) vy += 1;

        const direction =
            normalize(vx, vy);

        const speed = 2;

        return{
            ...entity,
            velocity: { x: direction.x * speed,
                        y: direction.y * speed
                    }
        };
    });
    return{
        ...state,
        entities
    }
}