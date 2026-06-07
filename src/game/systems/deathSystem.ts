import { isDead } from '../utils/isDead';

export function deathSystem(state) {

  state.entities.forEach(entity => {

    if (isDead(entity)) {
      entity.isDead = true;
      entity.markedForRemoval = true;
    }
  });

  return state;
}