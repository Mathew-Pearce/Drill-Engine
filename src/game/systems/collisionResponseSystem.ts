import { getEntitiesById } from '../utils/getEntitiesById';
import { damageEntity } from '../utils/damageEntity';

export function collisionResponseSystem(state) {

  state.events.forEach(event => {

    if (event.type !== 'collision')
      return;

    if (
      event.sourceLayer === 'bullet' &&
      event.targetLayer === 'player'
    ) {

      const source =
        getEntitiesById(
          state.entities,
          event.sourceId
        );

      const target =
        getEntitiesById(
          state.entities,
          event.targetId
        );

      if (!source || !target)
        return;

      damageEntity(
        target,
        1
      );

      source.markedForRemoval =
        true;
    }
  });

  return state;
}