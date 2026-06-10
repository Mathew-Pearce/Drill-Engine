import { getBullet }
from '../../entities/pools/bulletPool';

import { getEntityCenter } from '../../utils/getEntityCenter'

export function radialPattern(
  entity,
  state,
  newEntities
) {

  const count =
    entity.bulletCount || 8;

  for (
    let i = 0;
    i < count;
    i++
  ) {

    const angle =
      (Math.PI * 2 * i) / count;

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

      x: Math.cos(angle) * 2,

      y: Math.sin(angle) * 2,
    };

    newEntities.push(bullet);
  }
}
