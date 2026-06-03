import { releaseBullet } from '../entities/pools/bulletPool';

export function cleanUpSystem(state) {

  const entities = state.entities.filter(entity => {

    if (!entity.markedForRemoval)
      return true;

    if (entity.type === 'bullet') {
      releaseBullet(entity);
    }

    return false;
  });

  return {
    ...state,
    entities
  };
}