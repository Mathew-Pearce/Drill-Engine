import { getBullet }
from '../../entities/pools/bulletPool';

import { getEntityCenter }
from '../../utils/getEntityCenter';
import { getEntitiesById } from '../../utils/getEntitiesById'

import { getDirectionTo } from '../../utils/getDirectionTo'

import { getPosition } from '../../components/transform/getPosition';


export function aimedPattern(
  entity,
  state,
  newEntities
) {

  // 🟢 Find 'player' target in current game state
  const target = getEntitiesById(state.entities, 'player');

  // Safety check (player may not exist in future modes)
  if (!target)
    return;

  // 🟢 Calculate direction vector from emitter → player
  const emitterPosition =
  getPosition(entity);

const targetPosition =
  getPosition(target);

if (
  !emitterPosition ||
  !targetPosition
) return;

const direction =
  getDirectionTo(
    emitterPosition,
    targetPosition
  );

  // 🟢 Spawn bullet from emitter center
  const bullet =
    getBullet();

  const center =
    getEntityCenter(entity);

  if (!center)
    return;

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