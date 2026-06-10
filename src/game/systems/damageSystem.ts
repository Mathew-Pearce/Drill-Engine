import { getEntitiesById } from '../utils/getEntitiesById';
import { getComponent } from '../components/core/getComponent';
import { damageEntity } from '../utils/damageEntity';

export function damageSystem(state) {

  state.events.forEach(event => {

    if (event.type !== 'contact')
      return;

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

    const damage =
      getComponent(
        source,
        'damage'
      );

    const health =
      getComponent(
        target,
        'health'
      );

    if (!damage || !health)
      return;

    damageEntity(
      target,
      damage.amount
    );

    if (damage.removeOnContact === true) {
      source.markedForRemoval =
        true;
    }
  });

  return state;
}