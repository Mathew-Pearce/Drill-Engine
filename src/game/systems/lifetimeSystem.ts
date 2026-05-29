export function lifetimeSystem(state) {
    const entities =
        state.entities.filter(entity => {
            if (entity.lifetime === undefined)
                return true;

                entity.lifetime --;

                return entity.lifetime > 0;
        });

        return {
            ...state,
            entities
    };
}