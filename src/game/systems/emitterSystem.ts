import { getBullet }
from '../entities/pools/bulletPool';

import { patterns }
from './patterns/patternsIndex';

export function emitterSystem(state) {

  const newEntities =
    [...state.entities];

  state.entities.forEach(entity => {

    if (entity.type !== 'emitter')
      return;

    entity.timer++;

    if (entity.timer < entity.fireRate)
      return;

    entity.timer = 0;

    const pattern =
      patterns[
        entity.pattern
      ];

    if (!pattern)
      return;

    pattern(
      entity,
      state,
      newEntities
    );
  });

  return {
    ...state,
    entities: newEntities,
  };
}