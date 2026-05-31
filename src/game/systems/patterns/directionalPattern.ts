import { getBullet }
from '../../entities/pools/bulletPool';

export function directionalPattern(
  entity,
  state,
  newEntities
) {

  const bullet =
    getBullet();

  bullet.position = {
    ...entity.position
  };

  bullet.velocity = {
    x: entity.direction.x * 2,
    y: entity.direction.y * 2,
  };

  newEntities.push(bullet);
}