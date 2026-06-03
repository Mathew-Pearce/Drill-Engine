import { getEntitiesById } from '../utils/getEntitiesById';
import { getEntitiesByType } from '../utils/getEntitiesByType';
import { damageEntity } from '../utils/damageEntity';
import { isColliding } from '../utils/isColliding';

export function collisionSystem(state) {

  const player = getEntitiesById(
    state.entities,
    'player'
  );

  const bullets = getEntitiesByType(
    state.entities,
    'bullet'
  );

  bullets.forEach(bullet => {

    if (isColliding(player, bullet)) {

      damageEntity(player, 1);

      console.log(player.health);

      bullet.markedForRemoval = true;
    }
  });

  return state;
}