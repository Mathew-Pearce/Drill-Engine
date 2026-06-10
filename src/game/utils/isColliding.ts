import { getPosition } from '../components/transform/getPosition';
import { getComponent } from '../components/core/getComponent';

export function isColliding(a, b) {

  const positionA =
    getPosition(a);

  const positionB =
    getPosition(b);

  const colliderA =
    getComponent(
      a,
      'collider'
    );

  const colliderB =
    getComponent(
      b,
      'collider'
    );

  if (
    !positionA ||
    !positionB ||
    !colliderA ||
    !colliderB
  ) return false;

  return (
    positionA.x <
      positionB.x + colliderB.width &&

    positionA.x + colliderA.width >
      positionB.x &&

    positionA.y <
      positionB.y + colliderB.height &&

    positionA.y + colliderA.height >
      positionB.y
  );
}