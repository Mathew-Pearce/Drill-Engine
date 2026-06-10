import { getBullet }
from '../../entities/pools/bulletPool';

import { getEntityCenter } from '../../utils/getEntityCenter'

export function directionalPattern(
  entity,
  state,
  newEntities
) {

  const bullet =
    getBullet();

  const center = getEntityCenter(entity);

  if(!center)
    return;

  bullet.position = {
    x:
    center.x -
    bullet.size / 2,

    y:
    center.y -
    bullet.size / 2,
  };

  bullet.velocity = {
    x: entity.direction.x * 2,
    y: entity.direction.y * 2,
  };

  newEntities.push(bullet);
}