import { getEntitiesById } from '../utils/getEntitiesById';
import { getEntitiesByType } from '../utils/getEntitiesByType';
import { getComponent } from '../components/core/getComponent';
import { damageEntity } from '../utils/damageEntity';
import { isColliding } from '../utils/isColliding';
import { collisionRules } from '../components/collider/collisionRules'
import { canLayersCollide } from '../components/collider/canLayersCollide'

export function collisionSystem(state) {

  state.entities.forEach(source => {

    const sourceCollider =
      getComponent(
        source,
        'collider'
      );

    if (!sourceCollider)
      return;

    state.entities.forEach(target => {

      if (source === target)
        return;

      const targetCollider =
        getComponent(
          target,
          'collider'
        );

      if (!targetCollider)
        return;

        if (
          !isColliding(
            source,
            target
          )
        ) return;

      if (
        !canLayersCollide(
          sourceCollider.layer,
          targetCollider.layer,
          collisionRules
        )
      ) return

      state.events.push({
        type: 'collision',
      
        sourceId:
          source.id,
      
        targetId:
          target.id,
      
        sourceLayer:
          sourceCollider.layer,
      
        targetLayer:
          targetCollider.layer,
      });

    });
  });

  return state;
}