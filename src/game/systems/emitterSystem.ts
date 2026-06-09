import { patterns } from './patterns/patternsIndex';
import { getComponent } from '../components/core/getComponent';

export function emitterSystem(state) {

  const newEntities =
    [...state.entities];

  state.entities.forEach(entity => {

    const emitter =
      getComponent(
        entity,
        'emitter'
      );

    if (!emitter)
      return;

    emitter.timer++;

    if (emitter.timer < emitter.fireRate)
      return;

    emitter.timer = 0;

    const pattern =
      patterns[
        emitter.pattern
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