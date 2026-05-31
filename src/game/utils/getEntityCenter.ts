export function getEntityCenter(entity) {

    return {
  
      x:
        entity.position.x +
        entity.size / 2,
  
      y:
        entity.position.y +
        entity.size / 2,
    };
  }