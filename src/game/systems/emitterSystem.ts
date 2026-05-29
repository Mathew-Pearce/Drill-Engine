import { getBullet } from '../entities/bulletPool';

export function emitterSystem(state) {

  const newEntities = [...state.entities];

  state.entities.forEach(entity => {

    if (entity.type !== 'emitter')
      return;

    entity.timer++;

    if (entity.timer < entity.fireRate)
      return;

    entity.timer = 0;

    const bullet = getBullet();

    bullet.position = { ...entity.position };

    bullet.velocity = {
      x: entity.direction.x * 2,
      y: entity.direction.y * 2,
    };

    newEntities.push(bullet);

    console.log('[EMITTER] bullet spawned');
  });

  return {
    ...state,
    entities: newEntities,
  };
}