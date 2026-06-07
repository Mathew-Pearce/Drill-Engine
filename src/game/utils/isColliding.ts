import { getPosition } from '../components/transform/getPosition';

/**
 * Performs a simple axis-aligned bounding box collision test
 * using entity positions and sizes.
 *
 * Useful for:
 * - projectile impacts
 * - player interactions
 * - trigger zones
 *
 * 
 * @param a First entity.
 * @param b Second entity.
 * @returns True if the entities overlap, otherwise false.
 */

export function isColliding(a, b) {

  const positionA =
    getPosition(a);

  const positionB =
    getPosition(b);

  if (
    !positionA ||
    !positionB
  ) return false;

  return (
    positionA.x <
      positionB.x + b.size &&

    positionA.x + a.size >
      positionB.x &&

    positionA.y <
      positionB.y + b.size &&

    positionA.y + a.size >
      positionB.y
  );
}