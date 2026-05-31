import { getBullet }
from '../../entities/pools/bulletPool';

import { getEntityCenter }
from '../../utils/getEntityCenter';

import { getDirectionTo } from '../../utils/getDirectionTo'


export function aimedPattern(
  entity,
  state,
  newEntities
) {

  // 🟢 Find 'player' target in current game state
  const target =
    state.entities.find(
      e => e.type === entity.target
    );

  // Safety check (player may not exist in future modes)
  if (!target)
    return;

  // 🟢 Calculate direction vector from emitter → player
  const direction = getDirectionTo(
    entity.position,
    target.position,
  )

  // 🟢 Spawn bullet from emitter center
  const bullet =
    getBullet();

  const center =
    getEntityCenter(entity);

  bullet.position = {

    x:
      center.x -
      bullet.size / 2,

    y:
      center.y -
      bullet.size / 2,
  };

  // 🟢 Apply velocity in direction of player
  bullet.velocity = {

    x:
      direction.x * 2,

    y:
      direction.y * 2,
  };

  // 🟢 Inject bullet into world
  newEntities.push(bullet);
}