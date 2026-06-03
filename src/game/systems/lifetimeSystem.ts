export function lifetimeSystem(state) {

    const entities = state.entities.map(entity => {
  
      if (entity.lifetime === undefined)
        return entity;
  
      entity.lifetime--;
  
      if (entity.lifetime <= 0) {
        entity.markedForRemoval = true;
      }
  
      return entity;
    });
  
    return {
      ...state,
      entities
    };
  }