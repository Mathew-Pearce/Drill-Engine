import { getPosition } from '../components/getPosition';

export function movementSystem(state) {

  state.entities.forEach(entity => {

    if (!entity.velocity)
      return;

    const position =
      getPosition(entity);

    if (!position)
      return;

    position.x +=
      entity.velocity.x;

    position.y +=
      entity.velocity.y;
  });

  return state;
}