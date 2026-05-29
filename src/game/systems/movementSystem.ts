export function movementSystem(state) {
    const entities = state.entities.map(entity => {
        if (!entity.velocity) return entity;

        return {
            ...entity,
            position: {
                x: entity.position.x + entity.velocity.x,
                y: entity.position.y + entity.velocity.y,
            }
        }
    });

    return{
        ...state,
        entities
    };
}