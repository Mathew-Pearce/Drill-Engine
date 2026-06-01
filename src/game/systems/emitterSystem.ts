import { getBullet }
from '../entities/pools/bulletPool';

import { patterns }
from './patterns/patternsIndex';

import { getEntitiesByType } from '../utils/getEntitiesByType'

export function emitterSystem(state) {

  const emitters =
  getEntitiesByType(
    state.entities,
    'emitter'
  );

console.log(
  '[QUERY]',
  emitters.length
);

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