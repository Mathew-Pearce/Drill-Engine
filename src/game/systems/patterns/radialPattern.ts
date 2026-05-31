import { getBullet }
from '../../entities/pools/bulletPool';

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

    bullet.position = {
      ...entity.position
    };

    bullet.velocity = {

      x: Math.cos(angle) * 2,

      y: Math.sin(angle) * 2,
    };

    newEntities.push(bullet);
  }
}
