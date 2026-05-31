import { getBullet }
from '../entities/pools/bulletPool';

export function emitterSystem(state) {

  const newEntities = [...state.entities];

  state.entities.forEach(entity => {

    if (entity.type !== 'emitter')
      return;

    const player = state.entities.find(
      entity => entity.type === 'player'
    );

    entity.timer++;

    if (entity.timer < entity.fireRate)
      return;

    entity.timer = 0;

    // -------------------
    // RADIAL PATTERN
    // -------------------

    if (entity.pattern === 'radial') {

      const count =
        entity.bulletCount || 8;

      for (let i = 0; i < count; i++) {

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

      console.log(
        '[EMITTER] radial burst'
      );

      return;
    }

    // -------------------
    // Aimed PATTERN
    // -------------------

    if (entity.pattern === 'aimed'){
      if(!player) 
      return;

    // CALCULTE DIRECTION
    const dx =
    player.position.x -
    entity.position.x;

    const dy = 
    player.position.y -
    entity.position.y;

    const length = 
    Math.hypot(dx, dy);

    const direction = {
      x: dx / length,

      y: dy/ length,
    };

    const bullet = getBullet();

    bullet.position = {
      ...entity.position
    };

    bullet.velocity = {
      x: direction.x * 2,

      y: direction.y * 2,
    };

    newEntities.push(bullet);

    console.log('[EMITTER] aimed shot')

    return;
    }

    // -------------------
    // DEFAULT PATTERN
    // -------------------

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

    console.log(
      '[EMITTER] bullet spawned'
    );
  });

  return {
    ...state,
    entities: newEntities,
  };
}